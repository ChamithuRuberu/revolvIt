import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(req: NextRequest) {
  try {
    const requestBody = await req.text(); // Get the raw body as string
    const authHeader = req.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('HMAC ')) {
      console.error('Invalid authorization header');
      return NextResponse.json({ status: 'error' }, { status: 400 });
    }

    const receivedHash = authHeader.split(' ')[1];
    const secret = process.env.DIRECTPAY_SECRET_KEY;

    if (!secret) {
      console.error('DirectPay secret not configured');
      return NextResponse.json({ status: 'error' }, { status: 500 });
    }

    const generatedHash = crypto.createHmac('sha256', secret).update(requestBody).digest('hex');

    if (generatedHash !== receivedHash) {
      console.error('DirectPay notification verification failed');
      return NextResponse.json({ status: 'verification_failed' }, { status: 400 });
    }

    // Decode and parse the payload
    const decodedPayload = Buffer.from(requestBody, 'base64').toString('utf-8');
    const payload = JSON.parse(decodedPayload);

    const { order_id, amount, status } = payload;
    const finalStatus = payload.transaction?.status || status;
    const finalMessage = payload.transaction?.message || payload.message || 'Payment processed';

    console.log('DirectPay Payment Notification:', {
      order_id,
      status: finalStatus,
      amount,
    });

    // Update Database directly
    await connectDB();
    
    let paymentStatus = 'PENDING';
    const s = finalStatus.toLowerCase();
    if (s === 'success') paymentStatus = 'SUCCESS';
    else if (s === 'failed' || s === 'fail') paymentStatus = 'FAILED';
    else if (s === 'cancelled') paymentStatus = 'CANCELLED';

    await Order.findOneAndUpdate(
      { orderId: order_id },
      { 
        paymentStatus,
        failureReason: finalMessage
      }
    );

    if (paymentStatus === 'SUCCESS') {
      // Send receipt email
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
        await transporter.sendMail({
          from: `Green Code Solution <${process.env.EMAIL_USER}>`,
          to: payload.email || 'tcdruberu@gmail.com',
          subject: `Payment Receipt - Order ${order_id}`,
          text: `Thank you for your payment.\nOrder ID: ${order_id}\nAmount: ${amount}\nStatus: Success`,
          html: `<h2>Payment Receipt</h2><p>Order ID: <b>${order_id}</b></p><p>Amount: <b>${amount}</b></p><p>Status: <b>Success</b></p>`,
        });
      } catch (e) {
        console.error('❌ Failed to send receipt email:', e);
      }
    } else if (paymentStatus === 'FAILED') {
      // Send failure notification email
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
        await transporter.sendMail({
          from: `Green Code Solution <${process.env.EMAIL_USER}>`,
          to: payload.email || 'tcdruberu@gmail.com',
          subject: `Payment Failed - Order ${order_id}`,
          text: `Your payment attempt was unsuccessful.\nOrder ID: ${order_id}\nAmount: ${amount}\nReason: ${finalMessage}\n\nPlease try again or contact support.`,
          html: `<h2>Payment Failed</h2><p>Order ID: <b>${order_id}</b></p><p>Amount: <b>${amount}</b></p><p>Reason: <b>${finalMessage}</b></p><p>Please try again or contact support.</p>`,
        });
      } catch (e) {
        console.error('❌ Failed to send failure notification email:', e);
      }
    }

    return NextResponse.json({ status: 'received' });
  } catch (error) {
    console.error('DirectPay notification error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

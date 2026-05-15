import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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

    const { merchant_id, order_id, amount, status } = payload;

    console.log('DirectPay Payment Notification:', {
      order_id,
      status,
      amount,
    });

    // Store payment status for the frontend to check
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.greencodesolution.web.lk'}/api/directpay/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order_id,
          status: payload.transaction?.status || status,
          message: payload.transaction?.message || payload.message || 'Payment processed',
        }),
      });
    } catch (e) {
      console.error('Failed to store payment status:', e);
    }

    if (status === 'success') {
      // Payment successful
      // TODO: Update your database order status here
      console.log(`✅ Payment successful for order: ${order_id}`);

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
        console.log('✅ Receipt email sent');
      } catch (e) {
        console.error('❌ Failed to send receipt email:', e);
      }
    } else if (status === 'failed') {
      // Payment failed
      console.log(`❌ Payment failed for order: ${order_id}`);

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
          text: `Your payment attempt was unsuccessful.\nOrder ID: ${order_id}\nAmount: ${amount}\nReason: ${payload.message || 'Payment failed'}\n\nPlease try again or contact support.`,
          html: `<h2>Payment Failed</h2><p>Order ID: <b>${order_id}</b></p><p>Amount: <b>${amount}</b></p><p>Reason: <b>${payload.message || 'Payment failed'}</b></p><p>Please try again or contact support.</p>`,
        });
        console.log('✅ Failure notification email sent');
      } catch (e) {
        console.error('❌ Failed to send failure notification email:', e);
      }
    } else if (status === 'cancelled') {
      // Payment cancelled
      console.log(`❌ Payment cancelled for order: ${order_id}`);
    }

    return NextResponse.json({ status: 'received' });
  } catch (error) {
    console.error('DirectPay notification error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

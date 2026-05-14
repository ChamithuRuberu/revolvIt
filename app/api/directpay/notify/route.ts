import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

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

    if (status === 'success') {
      // Payment successful
      // TODO: Update your database order status here
      console.log(`✅ Payment successful for order: ${order_id}`);
    } else if (status === 'failed') {
      // Payment failed
      console.log(`❌ Payment failed for order: ${order_id}`);
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

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const merchant_id = formData.get('merchant_id') as string;
    const order_id = formData.get('order_id') as string;
    const amount = formData.get('amount') as string;
    const status = formData.get('status') as string;
    const signature = formData.get('signature') as string;

    const secret = process.env.DIRECTPAY_SECRET_KEY;

    if (!secret) {
      console.error('DirectPay secret not configured');
      return NextResponse.json({ status: 'error' }, { status: 500 });
    }

    // Verify signature: md5(secret + order_id + amount + status)
    const expectedSignature = crypto
      .createHash('md5')
      .update(secret + order_id + amount + status)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('DirectPay notification verification failed');
      return NextResponse.json({ status: 'verification_failed' }, { status: 400 });
    }

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

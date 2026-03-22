import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const merchant_id = formData.get('merchant_id') as string;
    const order_id = formData.get('order_id') as string;
    const payhere_amount = formData.get('payhere_amount') as string;
    const payhere_currency = formData.get('payhere_currency') as string;
    const status_code = formData.get('status_code') as string;
    const md5sig = formData.get('md5sig') as string;
    const payment_id = formData.get('payment_id') as string;
    const method = formData.get('method') as string;
    const status_message = formData.get('status_message') as string;

    const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET;

    if (!merchant_secret) {
      console.error('PayHere merchant secret not configured');
      return NextResponse.json({ status: 'error' }, { status: 500 });
    }

    // Verify the payment notification using md5sig
    // local_md5sig = to_upper_case(md5(merchant_id + order_id + payhere_amount + payhere_currency + status_code + to_upper_case(md5(merchant_secret))))
    const hashedSecret = crypto
      .createHash('md5')
      .update(merchant_secret)
      .digest('hex')
      .toUpperCase();

    const localMd5sig = crypto
      .createHash('md5')
      .update(merchant_id + order_id + payhere_amount + payhere_currency + status_code + hashedSecret)
      .digest('hex')
      .toUpperCase();

    if (localMd5sig !== md5sig) {
      console.error('PayHere notification verification failed - md5sig mismatch');
      console.error('Local:', localMd5sig, 'Received:', md5sig);
      return NextResponse.json({ status: 'verification_failed' }, { status: 400 });
    }

    // Payment status codes:
    // 2 = success
    // 0 = pending
    // -1 = canceled
    // -2 = failed
    // -3 = chargedback
    const statusCode = parseInt(status_code);

    console.log('PayHere Payment Notification:', {
      order_id,
      payment_id,
      status_code: statusCode,
      status_message,
      amount: payhere_amount,
      currency: payhere_currency,
      method,
    });

    if (statusCode === 2) {
      // Payment successful
      // TODO: Update your database order status here
      // Example: await updateOrderStatus(order_id, 'paid', { payment_id, method, amount: payhere_amount });
      console.log(`✅ Payment successful for order: ${order_id}`);
    } else if (statusCode === 0) {
      // Payment pending
      console.log(`⏳ Payment pending for order: ${order_id}`);
    } else if (statusCode === -1) {
      // Payment canceled
      console.log(`❌ Payment canceled for order: ${order_id}`);
    } else if (statusCode === -2) {
      // Payment failed
      console.log(`❌ Payment failed for order: ${order_id}`);
    } else if (statusCode === -3) {
      // Chargedback
      console.log(`⚠️ Payment chargedback for order: ${order_id}`);
    }

    return NextResponse.json({ status: 'received' });
  } catch (error) {
    console.error('PayHere notification error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}

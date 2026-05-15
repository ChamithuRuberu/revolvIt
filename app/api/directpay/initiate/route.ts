import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order_id, amount, currency, customer_name, customer_email, customer_phone } = body;

    if (!order_id || !amount || !currency) {
      return NextResponse.json(
        { error: 'Missing required fields: order_id, amount, currency' },
        { status: 400 }
      );
    }

    const merchant_id = process.env.DIRECTPAY_MERCHANT_ID;
    const secret = process.env.DIRECTPAY_SECRET_KEY;

    if (!merchant_id || !secret) {
      console.error('DirectPay credentials not configured');
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 500 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.greencodesolution.web.lk';

    const json_payload = {
      merchant_id,
      amount,
      type: 'ONE_TIME',
      order_id,
      currency,
      response_url: `${siteUrl}/api/directpay/notify`,
      return_url: `${siteUrl}/checkout/status?gateway=directpay&order_id=${order_id}`,
      first_name: customer_name || 'Customer',
      last_name: '',
      email: customer_email || '',
      phone: customer_phone || '',
      logo: '',
    };

    const encoded_payload = Buffer.from(JSON.stringify(json_payload)).toString('base64');
    const signature = crypto.createHmac('sha256', secret).update(encoded_payload).digest('hex');

    console.log('DirectPay payload:', json_payload);
    console.log('DirectPay encoded_payload:', encoded_payload);
    console.log('DirectPay signature:', signature);

    return NextResponse.json({
      signature,
      dataString: encoded_payload,
    });
  } catch (error) {
    console.error('DirectPay initiate error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate payment' },
      { status: 500 }
    );
  }
}

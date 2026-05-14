import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order_id, amount, currency, customer_name, customer_email, customer_phone, description } = body;

    if (!order_id || !amount || !currency) {
      return NextResponse.json(
        { error: 'Missing required fields: order_id, amount, currency' },
        { status: 400 }
      );
    }

    const merchant_id = process.env.DIRECTPAY_MERCHANT_ID;
    const api_key = process.env.DIRECTPAY_API_KEY;

    if (!merchant_id || !api_key) {
      console.error('DirectPay credentials not configured');
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 500 }
      );
    }

    const requestBody = {
      merchant_id,
      amount,
      currency,
      order_id,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?gateway=directpay`,
      notify_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/directpay/notify`,
      customer_name: customer_name || 'Customer',
      customer_email: customer_email || '',
      customer_phone: customer_phone || '',
      description: description || '',
    };

    console.log('DirectPay request:', requestBody);

    const response = await fetch('https://api.directpay.lk/api/v1/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('DirectPay API error:', data);
      return NextResponse.json(
        { error: 'DirectPay API error', details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({
      payment_url: data.url,
    });
  } catch (error) {
    console.error('DirectPay initiate error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate payment' },
      { status: 500 }
    );
  }
}

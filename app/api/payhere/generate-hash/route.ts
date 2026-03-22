import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order_id, amount, currency } = body;

    if (!order_id || !amount || !currency) {
      return NextResponse.json(
        { error: 'Missing required fields: order_id, amount, currency' },
        { status: 400 }
      );
    }

    const merchant_id = process.env.PAYHERE_MERCHANT_ID;
    const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET;

    if (!merchant_id || !merchant_secret) {
      console.error('PayHere credentials not configured');
      return NextResponse.json(
        { error: 'Payment gateway not configured' },
        { status: 500 }
      );
    }

    // PayHere hash formula:
    // to_upper_case(md5(merchant_id + order_id + amount + currency + to_upper_case(md5(merchant_secret))))
    const hashedSecret = crypto
      .createHash('md5')
      .update(merchant_secret)
      .digest('hex')
      .toUpperCase();

    const amountFormatted = parseFloat(amount).toFixed(2);

    const hash = crypto
      .createHash('md5')
      .update(merchant_id + order_id + amountFormatted + currency + hashedSecret)
      .digest('hex')
      .toUpperCase();

    return NextResponse.json({
      merchant_id,
      hash,
    });
  } catch (error) {
    console.error('Hash generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate payment hash' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

// Store payment statuses in memory (in production, use a database)
const paymentStatuses: { [key: string]: { status: string; message: string; timestamp: number } } = {};

export async function POST(req: NextRequest) {
  try {
    const { order_id, status, message } = await req.json();

    if (!order_id) {
      return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
    }

    // Store the payment status
    paymentStatuses[order_id] = {
      status,
      message,
      timestamp: Date.now(),
    };

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Payment status error:', error);
    return NextResponse.json({ error: 'Failed to store status' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const order_id = searchParams.get('order_id');

    if (!order_id) {
      return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
    }

    const paymentStatus = paymentStatuses[order_id];

    if (!paymentStatus) {
      return NextResponse.json({ status: 'pending', message: 'Payment status not yet received' });
    }

    return NextResponse.json(paymentStatus);
  } catch (error) {
    console.error('Get payment status error:', error);
    return NextResponse.json({ error: 'Failed to get status' }, { status: 500 });
  }
}


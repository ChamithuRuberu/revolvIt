import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { order_id, status, message } = await req.json();

    if (!order_id) {
      return NextResponse.json({ error: 'Order ID required' }, { status: 400 });
    }

    await connectDB();
    
    // Update the order in the database
    // Map DirectPay status to our internal status
    let paymentStatus = 'PENDING';
    const s = status.toLowerCase();
    if (s === 'success') paymentStatus = 'SUCCESS';
    else if (s === 'failed' || s === 'fail') paymentStatus = 'FAILED';
    else if (s === 'cancelled') paymentStatus = 'CANCELLED';

    await Order.findOneAndUpdate(
      { orderId: order_id },
      { 
        paymentStatus,
        failureReason: message || (paymentStatus === 'FAILED' ? 'Payment failed' : undefined)
      },
      { upsert: false }
    );

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

    await connectDB();
    const order = await Order.findOne({ orderId: order_id }).lean();

    if (!order || order.paymentStatus === 'PENDING') {
      return NextResponse.json({ status: 'pending', message: 'Payment status not yet received' });
    }

    return NextResponse.json({
      status: order.paymentStatus.toLowerCase(),
      message: order.failureReason || 'Payment processed',
    });
  } catch (error) {
    console.error('Get payment status error:', error);
    return NextResponse.json({ error: 'Failed to get status' }, { status: 500 });
  }
}

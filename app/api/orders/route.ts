import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await connectDB();
        const orders = await Order.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json(orders);
    } catch (error: any) {
        console.error('Orders API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json();
        
        // If updating an existing order's status
        if (body.orderId && body.action === 'update_status') {
             const updated = await Order.findOneAndUpdate(
                 { orderId: body.orderId },
                 { 
                     paymentStatus: body.paymentStatus,
                     failureReason: body.failureReason
                 },
                 { new: true }
             );
             return NextResponse.json(updated || { error: 'Order not found' });
        }

        // Creating a new order
        const newOrder = await Order.create(body);
        return NextResponse.json(newOrder);
    } catch (error: any) {
        console.error('Create Order Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

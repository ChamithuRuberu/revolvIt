import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const order_id = searchParams.get('order_id');

  // TODO: Fetch order/payment details from DB by order_id
  // For now, return a simple text receipt
  if (!order_id) {
    return new NextResponse('Order ID is required', { status: 400 });
  }

  // Example static receipt
  const receipt = `
    Payment Receipt\n\nOrder ID: ${order_id}\nAmount: [amount]\nStatus: Success\n\nThank you for your payment!\nGreen Code Solution
  `;

  return new NextResponse(receipt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': `attachment; filename=receipt-${order_id}.txt`,
    },
  });
}


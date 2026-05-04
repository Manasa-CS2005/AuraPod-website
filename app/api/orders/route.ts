import { NextResponse } from 'next/server';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
} from '@/lib/supabase/queries';

// GET /api/orders?userId=xxx
// GET /api/orders?orderId=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const orderId = searchParams.get('orderId');

    if (orderId) {
      const order = await getOrderById(orderId);
      return NextResponse.json(order);
    }

    if (userId) {
      const orders = await getUserOrders(userId);
      return NextResponse.json(orders);
    }

    return NextResponse.json(
      { error: 'userId or orderId is required' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Create new order
// Body: { user_id, total_amount, payment_method, shipping_address, items: [{product_id, quantity, price}] }
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_id, total_amount, payment_method, shipping_address, items } = body;

    if (!user_id || !total_amount || !shipping_address || !items?.length) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const order = await createOrder({
      user_id,
      total_amount,
      payment_method: payment_method || null,
      shipping_address,
      items,
    });

    return NextResponse.json(
      { message: 'Order created successfully', order },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create order' },
      { status: 500 }
    );
  }
}

// PUT /api/orders - Update order status
// Body: { orderId, status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' }
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { orderId, status } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'orderId and status are required' },
        { status: 400 }
      );
    }

    const order = await updateOrderStatus(orderId, status);
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update order' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import {
  addToCart,
  removeFromCart,
  getUserCart,
  clearCart,
} from '@/lib/supabase/queries';

// GET /api/cart?userId=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const cart = await getUserCart(userId);
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}

// POST /api/cart - Add to cart
// DELETE /api/cart - Remove from cart or clear cart
// Body: { action: 'add' | 'remove' | 'clear', userId, productId?, quantity?, cartItemId? }
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, productId, quantity } = body;

    if (!userId || !productId || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, productId, quantity' },
        { status: 400 }
      );
    }

    const cartItem = await addToCart(userId, productId, quantity);
    return NextResponse.json(
      { message: 'Added to cart', cartItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to add to cart' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || 'remove';
    const cartItemId = searchParams.get('cartItemId');
    const userId = searchParams.get('userId');

    if (action === 'clear' && userId) {
      await clearCart(userId);
      return NextResponse.json({ message: 'Cart cleared' });
    }

    if (action === 'remove' && cartItemId) {
      await removeFromCart(cartItemId);
      return NextResponse.json({ message: 'Item removed from cart' });
    }

    return NextResponse.json(
      { error: 'Invalid action or missing parameters' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to update cart' },
      { status: 500 }
    );
  }
}

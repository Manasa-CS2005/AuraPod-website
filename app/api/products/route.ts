import { NextResponse } from 'next/server';
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from '@/lib/supabase/queries';

// GET /api/products
// GET /api/products?id=xxx
// GET /api/products?category=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');
    const category = searchParams.get('category');

    if (productId) {
      const product = await getProductById(productId);
      return NextResponse.json(product);
    }

    if (category) {
      const products = await getProductsByCategory(category);
      return NextResponse.json(products);
    }

    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

import { createClient } from './client';
import type { User, Product, Order, CartItem, OrderWithItems } from './types';

// ==================== USER OPERATIONS ====================

export async function registerUser(userData: {
  email: string;
  password_hash: string;
  full_name: string;
}) {
  const client = createClient();
  
  const { data, error } = await client
    .from('users')
    .insert([userData])
    .select()
    .single();

  if (error) throw new Error(`Failed to register user: ${error.message}`);
  return data as User;
}

export async function getUserByEmail(email: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
  return data as User | null;
}

export async function getUserProfile(userId: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw new Error(`Failed to get user profile: ${error.message}`);
  return data as User;
}

export async function updateUserProfile(userId: string, updates: Partial<User>) {
  const client = createClient();
  
  const { data, error } = await client
    .from('users')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw new Error(`Failed to update user profile: ${error.message}`);
  return data as User;
}

// ==================== PRODUCT OPERATIONS ====================

export async function getAllProducts() {
  const client = createClient();
  
  const { data, error } = await client
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch products: ${error.message}`);
  return data as Product[];
}

export async function getProductById(productId: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('products')
    .select('*')
    .eq('id', productId)
    .single();

  if (error) throw new Error(`Failed to fetch product: ${error.message}`);
  return data as Product;
}

export async function getProductsByCategory(category: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch products: ${error.message}`);
  return data as Product[];
}

// ==================== CART OPERATIONS ====================

export async function addToCart(userId: string, productId: string, quantity: number) {
  const client = createClient();
  
  // Check if item already exists in cart
  const { data: existing } = await client
    .from('cart_items')
    .select('id, quantity')
    .eq('user_id', userId)
    .eq('product_id', productId)
    .single();

  if (existing) {
    // Update quantity if item exists
    const { data, error } = await client
      .from('cart_items')
      .update({ 
        quantity: existing.quantity + quantity,
        updated_at: new Date().toISOString()
      })
      .eq('id', existing.id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update cart: ${error.message}`);
    return data as CartItem;
  }

  // Insert new cart item
  const { data, error } = await client
    .from('cart_items')
    .insert([{ user_id: userId, product_id: productId, quantity }])
    .select()
    .single();

  if (error) throw new Error(`Failed to add to cart: ${error.message}`);
  return data as CartItem;
}

export async function removeFromCart(cartItemId: string) {
  const client = createClient();
  
  const { error } = await client
    .from('cart_items')
    .delete()
    .eq('id', cartItemId);

  if (error) throw new Error(`Failed to remove from cart: ${error.message}`);
}

export async function getUserCart(userId: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('cart_items')
    .select(`
      *,
      product:product_id (
        id, name, price, image_url
      )
    `)
    .eq('user_id', userId);

  if (error) throw new Error(`Failed to fetch cart: ${error.message}`);
  return data;
}

export async function clearCart(userId: string) {
  const client = createClient();
  
  const { error } = await client
    .from('cart_items')
    .delete()
    .eq('user_id', userId);

  if (error) throw new Error(`Failed to clear cart: ${error.message}`);
}

// ==================== ORDER OPERATIONS ====================

export async function createOrder(orderData: {
  user_id: string;
  total_amount: number;
  payment_method: string | null;
  shipping_address: string;
  notes?: string;
  items: Array<{ product_id: string; quantity: number; price: number }>;
}) {
  const client = createClient();
  const { items, ...order } = orderData;

  try {
    // Create order
    const { data: newOrder, error: orderError } = await client
      .from('orders')
      .insert([order])
      .select()
      .single();

    if (orderError) throw orderError;

    // Add order items
    const orderItems = items.map(item => ({
      order_id: newOrder.id,
      ...item
    }));

    const { error: itemsError } = await client
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // Clear cart
    await clearCart(order.user_id);

    return newOrder as Order;
  } catch (error) {
    throw new Error(`Failed to create order: ${error}`);
  }
}

export async function getUserOrders(userId: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:product_id (
          id, name, price, image_url
        )
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch orders: ${error.message}`);
  return data as OrderWithItems[];
}

export async function getOrderById(orderId: string) {
  const client = createClient();
  
  const { data, error } = await client
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:product_id (
          id, name, price, image_url
        )
      )
    `)
    .eq('id', orderId)
    .single();

  if (error) throw new Error(`Failed to fetch order: ${error.message}`);
  return data as OrderWithItems;
}

export async function updateOrderStatus(orderId: string, status: Order['status']) {
  const client = createClient();
  
  const { data, error } = await client
    .from('orders')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', orderId)
    .select()
    .single();

  if (error) throw new Error(`Failed to update order status: ${error.message}`);
  return data as Order;
}

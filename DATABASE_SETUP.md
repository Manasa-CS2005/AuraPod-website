# Auropod Website Database Setup

## Overview

This database structure manages:
- **User Accounts**: Login credentials and profile information
- **Products**: Shop inventory with pricing and details
- **Orders**: Customer orders with status tracking
- **Order Items**: Individual items within each order
- **Cart**: Shopping cart management

## Database Schema

### Tables

#### users
Stores login credentials and customer profiles
```
- id (UUID, Primary Key)
- email (unique)
- password_hash
- full_name
- phone
- address, city, state, postal_code, country
- created_at, updated_at
```

#### products
Stores product inventory
```
- id (UUID, Primary Key)
- name
- description
- price (decimal)
- image_url
- category
- stock_quantity
- created_at, updated_at
```

#### orders
Tracks customer orders
```
- id (UUID, Primary Key)
- user_id (Foreign Key → users)
- total_amount
- status (pending, processing, shipped, delivered, cancelled)
- payment_method
- shipping_address
- notes
- created_at, updated_at
```

#### order_items
Items within each order
```
- id (UUID, Primary Key)
- order_id (Foreign Key → orders)
- product_id (Foreign Key → products)
- quantity
- price (price at time of order)
- created_at
```

#### cart_items
Shopping cart items
```
- id (UUID, Primary Key)
- user_id (Foreign Key → users)
- product_id (Foreign Key → products)
- quantity
- created_at, updated_at
```

## Setup Instructions

### Step 1: Create Database Tables

1. Go to [Supabase Console](https://app.supabase.com)
2. Select your project
3. Open **SQL Editor**
4. Click **New Query**
5. Copy the entire content from `lib/supabase/schema.sql`
6. Paste it into the SQL editor
7. Click **Run** (or Ctrl+Enter)

The schema will:
- Create all 5 tables
- Add indexes for performance
- Enable Row Level Security (RLS) for security
- Set up RLS policies for data access control

### Step 2: Insert Sample Data (Optional)

To test the system with sample products:

```sql
INSERT INTO products (name, description, price, category, stock_quantity, image_url)
VALUES
  ('Auropod Candle - Lavender', 'Premium lavender scented candle', 24.99, 'candles', 50, '/images/products/lavender.jpg'),
  ('Auropod Candle - Vanilla', 'Smooth vanilla scented candle', 24.99, 'candles', 45, '/images/products/vanilla.jpg'),
  ('Auropod Candle - Rose', 'Delicate rose scented candle', 29.99, 'candles', 30, '/images/products/rose.jpg'),
  ('Auropod Wax Refill - Lavender', 'Wax refill for Lavender candles', 12.99, 'refills', 100, '/images/products/refill-lavender.jpg'),
  ('Auropod Wax Refill - Vanilla', 'Wax refill for Vanilla candles', 12.99, 'refills', 95, '/images/products/refill-vanilla.jpg');
```

## API Endpoints

### User Management
- **POST** `/api/auth/register` - Register new user
- **GET** `/api/user/profile?userId=xxx` - Get user profile
- **PUT** `/api/user/profile` - Update user profile

### Products
- **GET** `/api/products` - Get all products
- **GET** `/api/products?id=xxx` - Get specific product
- **GET** `/api/products?category=xxx` - Get products by category

### Cart
- **GET** `/api/cart?userId=xxx` - Get user's cart
- **POST** `/api/cart` - Add item to cart
- **DELETE** `/api/cart?action=remove&cartItemId=xxx` - Remove item
- **DELETE** `/api/cart?action=clear&userId=xxx` - Clear cart

### Orders
- **GET** `/api/orders?userId=xxx` - Get user's orders
- **GET** `/api/orders?orderId=xxx` - Get specific order
- **POST** `/api/orders` - Create new order
- **PUT** `/api/orders` - Update order status

## Usage Examples

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password_hash": "hashed_password_here",
    "full_name": "John Doe"
  }'
```

### Get All Products
```bash
curl http://localhost:3000/api/products
```

### Add to Cart
```bash
curl -X POST http://localhost:3000/api/cart \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-uuid-here",
    "productId": "product-uuid-here",
    "quantity": 2
  }'
```

### Create Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": "user-uuid-here",
    "total_amount": 49.98,
    "payment_method": "credit_card",
    "shipping_address": "123 Main St, City, State 12345",
    "items": [
      {
        "product_id": "product-uuid-here",
        "quantity": 2,
        "price": 24.99
      }
    ]
  }'
```

## Database Functions (TypeScript)

Import from `lib/supabase/queries.ts`:

```typescript
import {
  registerUser,
  getUserProfile,
  updateUserProfile,
  getAllProducts,
  getProductById,
  addToCart,
  getUserCart,
  clearCart,
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
} from '@/lib/supabase/queries';
```

## Row Level Security (RLS)

The database includes RLS policies to:
- Users can only view/edit their own profile
- Users can only see their own orders
- Users can only manage their own cart
- Products are publicly readable
- All sensitive data is protected

## Notes

- Password hashing should be done on the frontend/backend using libraries like `bcryptjs` before storing
- The `created_at` and `updated_at` timestamps are automatically managed by PostgreSQL
- Indexes are created on frequently queried columns for better performance
- Foreign keys ensure data integrity across tables

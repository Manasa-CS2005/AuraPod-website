import { NextResponse } from 'next/server';
import {
  registerUser,
  getUserByEmail,
  getUserProfile,
  updateUserProfile,
} from '@/lib/supabase/queries';

// POST /api/auth/register
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password_hash, full_name } = body;

    if (!email || !password_hash || !full_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    const user = await registerUser({ email, password_hash, full_name });
    
    return NextResponse.json(
      { message: 'User registered successfully', user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Registration failed' },
      { status: 500 }
    );
  }
}

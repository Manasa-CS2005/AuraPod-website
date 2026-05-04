import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

/** Checks env vars and reaches Supabase Auth health endpoint (no DB tables required). */
export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      ok: false,
      configured: false,
      message:
        "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local",
    });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/auth/v1/health`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      cache: "no-store",
    });

    const ok = res.ok;
    return NextResponse.json({
      ok,
      configured: true,
      status: res.status,
      message: ok
        ? "Supabase responded successfully"
        : "Supabase returned an error; check URL and anon key",
    });
  } catch {
    return NextResponse.json({
      ok: false,
      configured: true,
      message: "Network error reaching Supabase",
    });
  }
}

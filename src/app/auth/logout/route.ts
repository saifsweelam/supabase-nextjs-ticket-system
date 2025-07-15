import { getSupabaseServerClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const supabase = await getSupabaseServerClient();
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL("/auth/login", request.url));
}
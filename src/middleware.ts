import { cookies } from "next/headers";
import { getSupabaseServerClient } from "./lib/supabase/server";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
    const cookieStore = await cookies();
    const supabase = getSupabaseServerClient(cookieStore);
    return NextResponse.next();
}
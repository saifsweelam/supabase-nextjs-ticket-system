import { getSupabaseServerClient } from "./lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const guestOnlyPaths = ["/", "/auth/login", "/auth/signup", "/auth/forgot-password"];

export async function middleware(request: NextRequest) {
    const supabase = await getSupabaseServerClient();
    const session = await supabase.auth.getSession();
    if (!session.data.session?.user && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (session.data.session?.user && guestOnlyPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/dashboard/tickets", request.url));
    }
    return NextResponse.next();
}

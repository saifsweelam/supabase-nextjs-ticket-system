import { getSupabaseServerClient } from "./lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { getPathParts } from "./services/common/url";

const guestOnlyPaths = ["/", "/auth/login", "/auth/signup"];

export async function middleware(request: NextRequest) {
    const supabase = await getSupabaseServerClient();
    const { data } = await supabase.auth.getSession();
    const { tenant, resource } = getPathParts(request.nextUrl.pathname);
    if (!data.session && resource.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (data.session && guestOnlyPaths.includes(resource)) {
        return NextResponse.redirect(new URL("/dashboard/tickets", request.url));
    }
    return NextResponse.next();
}

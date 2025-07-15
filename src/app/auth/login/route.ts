import { getSupabaseServerClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const supabase = await getSupabaseServerClient();
    const body = await request.formData();
    const email = body.get("email") as string;
    const isPasswordLogin = body.get("isPasswordLogin") === "on";

    if (isPasswordLogin) {
        const password = body.get("password") as string;
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (!data.session?.user || error) {
            return NextResponse.redirect(new URL("/error?type=login-failed", request.url), 302);
        }
        return NextResponse.redirect(new URL("/dashboard/tickets", request.url), 302);
    }

    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: false,
        },
    });
    if (error) {
        return NextResponse.redirect(new URL("/error?type=magic-link-sending-failed", request.url), 302);
    }
    return NextResponse.redirect(new URL("/auth/login/magicLink", request.url), 302);
}

export async function GET(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}
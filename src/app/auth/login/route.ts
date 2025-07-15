import { loginWithMagicLink, loginWithPassword } from "@/services/server/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.formData();
    const email = body.get("email") as string;
    const isPasswordLogin = body.get("isPasswordLogin") === "on";

    if (isPasswordLogin) {
        try {
            const password = body.get("password") as string;
            await loginWithPassword(email, password);
            return NextResponse.redirect(new URL("/dashboard/tickets", request.url), 302);
        } catch {
            return NextResponse.redirect(new URL("/error?type=login-failed", request.url), 302);
        }
    }

    try {
        await loginWithMagicLink(email, request.url);
        return NextResponse.redirect(new URL("/auth/login/magicLink", request.url), 302);
    } catch {
        return NextResponse.redirect(new URL("/error?type=magic-link-sending-failed", request.url), 302);
    }
}

export async function GET(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url));
}
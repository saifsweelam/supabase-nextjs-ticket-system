import { getFullUrl, getPathParts } from "@/services/common/url";
import { loginWithMagicLink, loginWithPassword } from "@/services/server/auth";
import { HandlerProps } from "@/types/HandlerProps";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: HandlerProps) {
    const body = await request.formData();
    const email = body.get("email") as string;
    const isPasswordLogin = body.get("isPasswordLogin") === "on";
    const { tenant } = getPathParts(request.nextUrl.pathname);

    if (isPasswordLogin) {
        try {
            const password = body.get("password") as string;
            await loginWithPassword(email, password);
            return NextResponse.redirect(getFullUrl('/dashboard/tickets', params.tenant, request.url), 302);
        } catch {
            return NextResponse.redirect(getFullUrl('/error?type=login-failed', params.tenant, request.url), 302);
        }
    }

    try {
        const type = body.get("type") as 'recovery' | 'magiclink';
        if (type !== 'recovery' && type !== 'magiclink') {
            return NextResponse.redirect(getFullUrl("/error?type=bad-request", params.tenant, request.url), 302);
        }
        await loginWithMagicLink(email, request.url, type, tenant);
        return NextResponse.redirect(getFullUrl("/auth/login/magicLink", params.tenant, request.url), 302);
    } catch {
        return NextResponse.redirect(getFullUrl("/error?type=magic-link-sending-failed", params.tenant, request.url), 302);
    }
}

export async function GET(request: NextRequest, { params }: HandlerProps) {
    return NextResponse.redirect(getFullUrl("/", params.tenant, request.url));
}
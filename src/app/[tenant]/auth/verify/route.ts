import { getFullUrl } from "@/services/common/url";
import { verifyMagicLink } from "@/services/server/auth";
import { HandlerProps } from "@/types/HandlerProps";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, probs: HandlerProps) {
    const params = await probs.params;
    const { searchParams } = new URL(request.url);
    const hashedToken = searchParams.get('hashed_token');
    const type = searchParams.get('type') as 'recovery' | 'magiclink';
    if (!hashedToken) {
        return NextResponse.redirect(getFullUrl("/error?type=invalid-magic-link", params.tenant, request.url));
    }
    try {
        await verifyMagicLink(hashedToken);
        if (type === 'recovery') {
            return NextResponse.redirect(getFullUrl("/dashboard/settings", params.tenant, request.url));
        }
        return NextResponse.redirect(getFullUrl("/dashboard/tickets", params.tenant, request.url));
    } catch {
        return NextResponse.redirect(getFullUrl("/error?type=invalid-magic-link", params.tenant, request.url));
    }
}
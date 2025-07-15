import { verifyMagicLink } from "@/services/server/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const hashedToken = searchParams.get('hashed_token');
    if (!hashedToken) {
        return NextResponse.redirect(new URL("/error?type=invalid-magic-link", request.url));
    }
    try {
        await verifyMagicLink(hashedToken);
        return NextResponse.redirect(new URL("/dashboard/tickets", request.url));
    } catch {
        return NextResponse.redirect(new URL("/error?type=invalid-magic-link", request.url));
    }
}
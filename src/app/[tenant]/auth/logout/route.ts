import { getFullUrl } from "@/services/common/url";
import { logout } from "@/services/server/auth";
import { HandlerProps } from "@/types/HandlerProps";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, probs: HandlerProps) {
    const params = await probs.params;
    try {
        await logout();
        return NextResponse.redirect(getFullUrl("/auth/login", params.tenant, request.url));
    } catch (error) {
        return NextResponse.redirect(getFullUrl("/error?type=server-error", params.tenant, request.url));
    }
}

import { logout } from "@/services/server/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        await logout();
        return NextResponse.redirect(new URL("/auth/login", request.url));
    } catch (error) {
        return NextResponse.redirect(new URL("/error?type=server-error", request.url));
    }
}

"use server";
import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { Database } from "./types";
import { cookies } from "next/headers";

export const getSupabaseServerClient = async () => {
    const cookieStore = await cookies();
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => cookieStore.getAll(),
                setAll: (cookiesArray) => {
                    try {
                        cookiesArray.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch (error) {
                        console.error("Error setting cookies:", error);
                    }
                }
            }
        }
    );
}

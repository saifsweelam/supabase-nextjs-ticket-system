"use server";
import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { Database } from "./types";

export const getSupabaseServerClient = (cookies: ReadonlyRequestCookies) =>
    createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll: () => cookies.getAll(),
                setAll: (cookiesArray) => {
                    try {
                        cookiesArray.forEach(({ name, value, options }) => {
                            cookies.set(name, value, options);
                        });
                    } catch (error) {
                        console.error("Error setting cookies:", error);
                    }
                }
            }
        }
    );

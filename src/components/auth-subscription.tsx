"use client";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthSubscription() {
    const supabase = getSupabaseBrowserClient();
    const router = useRouter();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_OUT") {
                router.push("/auth/login");
            } else if (event === "SIGNED_IN") {
                if (!window.location.pathname.startsWith("/dashboard")) {
                    router.push("/dashboard/tickets");
                }
            }
        });

        return () => subscription.unsubscribe();
    }, []);
    return null;
}
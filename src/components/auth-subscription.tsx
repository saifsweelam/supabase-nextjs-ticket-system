"use client";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useURL } from "@/services/client/urlProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function AuthSubscription() {
    const supabase = getSupabaseBrowserClient();
    const router = useRouter();
    const { getPath, getPathParts } = useURL();
    const pathname = usePathname();

    useEffect(() => {
        const { resource } = getPathParts(pathname);
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === "SIGNED_OUT") {
                router.push(getPath("/auth/login"));
            } else if (event === "SIGNED_IN") {
                if (!resource.startsWith("dashboard")) {
                    router.push(getPath("/dashboard/tickets"));
                }
            }
        });

        return () => subscription.unsubscribe();
    }, [pathname]);
    return null;
}
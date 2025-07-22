"use client";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"
import { useURL } from "@/services/client/urlProvider";
import { toast } from "react-toastify";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";

export type AuthContextType = {
    session: Session | null;
    loginWithPassword: (email: string, password: string) => Promise<{ user: User, session: Session }>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const supabase = getSupabaseBrowserClient();
    const router = useRouter();
    const { getPath, getPathParts } = useURL();
    const pathname = usePathname();
    const [session, setSession] = useState<Session | null>(null);

    const loginWithPassword = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (!data || error) throw error;
        return data;
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return;
    }

    const handleAuthStateRouting = (event: AuthChangeEvent, resource: string) => {
        if (event === "SIGNED_OUT") {
            router.push(getPath("/auth/login"));
        } else if (event === "SIGNED_IN") {
            if (!resource.startsWith("dashboard")) {
                router.push(getPath("/dashboard/tickets"));
            }
        }
    }

    useEffect(() => {
        const { tenant, resource } = getPathParts(pathname);
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);

            if (event === "SIGNED_IN" && !session?.user.app_metadata.tenants?.includes(tenant)) {
                supabase.auth.signOut();
                toast.error("You do not have access to this tenant.");
                return;
            }

            handleAuthStateRouting(event, resource);
        });

        return () => subscription.unsubscribe();
    }, [pathname]);

    return <AuthContext.Provider value={{ session, loginWithPassword, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
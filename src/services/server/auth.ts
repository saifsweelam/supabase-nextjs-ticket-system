import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { sendMagicLinkEmail } from "./emails";

export const loginWithPassword = async (email: string, password: string) => {
    const supabase = await getSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (!data.session?.user || error) {
        throw error;
    }
    return data;
};

export const loginWithMagicLink = async (email: string, url: string, type: 'recovery' | 'magiclink') => {
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase.auth.admin.generateLink({ email, type });
    if (error) throw error;
    const magicLink = new URL(`/auth/verify?hashed_token=${data.properties.hashed_token}`, url);
    if (type === 'recovery') {
        magicLink.searchParams.set('type', 'recovery');
    } else {
        magicLink.searchParams.set('type', 'magiclink');
    }
    return await sendMagicLinkEmail(email, magicLink.toString());
};

export const verifyMagicLink = async (hashedToken: string) => {
    const supabase = await getSupabaseServerClient();
    const { data, error } = await supabase.auth.verifyOtp({
        type: "magiclink",
        token_hash: hashedToken
    });
    if (error) throw error;
    if (!data.session?.user) {
        throw new Error("Invalid or expired magic link");
    }
    return data;
}

export const logout = async () => {
    const supabase = await getSupabaseServerClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return;
}

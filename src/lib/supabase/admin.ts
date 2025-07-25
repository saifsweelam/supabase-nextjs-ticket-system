import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

export const getSupabaseAdminClient = () => {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
}
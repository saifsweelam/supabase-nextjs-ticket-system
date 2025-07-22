import "@supabase/supabase-js";

declare module "@supabase/supabase-js" {
    export interface UserAppMetadata {
        tenants?: string[];
    }
}

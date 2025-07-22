import { LoginForm } from "@/components/login-form";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { notFound } from "next/navigation";
import { TenantProvider } from "@/services/client/tenantProvider";

export type LoginPageProps = {
  searchParams?: Promise<{
    isMagicLink?: string;
    type?: 'recovery' | 'magiclink';
  }>;
  params: Promise<{ tenant: string }>;
};

export default async function LoginPage(props: LoginPageProps) {
  const searchParams = await props.searchParams;
  const { tenant: tenantId } = await props.params;
  const supabase = getSupabaseAdminClient();
  const { data: tenant, error } = await supabase.from('tenants').select('*').eq('id', tenantId).single();
  if (error || !tenant) {
    return notFound();
  }
  return (
    <TenantProvider tenant={tenant}>
      <LoginForm isPasswordLogin={!(searchParams?.isMagicLink === "true")} type={searchParams?.type || 'magiclink'} />
    </TenantProvider>
  );
}

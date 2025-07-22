import { AppSidebar } from "@/components/app-sidebar";
import { AutoBreadcrumbs } from "@/components/auto-breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { TenantProvider } from "@/services/client/tenantProvider";
import { notFound } from "next/navigation";

export type DashboardLayoutProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{ tenant: string; }>;
}>;

export default async function DashboardLayout({
    children,
    params,
}: DashboardLayoutProps) {
    const { tenant: tenantId } = await params;
    const supabase = await getSupabaseServerClient();
    const { data: tenant, error } = await supabase.from('tenants').select('*').eq('id', tenantId).single();
    if (error || !tenant) {
        return notFound();
    }
    return (
        <TenantProvider tenant={tenant}>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "350px",
                    } as React.CSSProperties
                }
            >
                <AppSidebar />
                <SidebarInset>
                    <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <AutoBreadcrumbs />
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </TenantProvider>
    )
}
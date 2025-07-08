import { AppSidebar } from "@/components/app-sidebar";
import { AutoBreadcrumbs } from "@/components/auto-breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export type DashboardLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
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
    )
}
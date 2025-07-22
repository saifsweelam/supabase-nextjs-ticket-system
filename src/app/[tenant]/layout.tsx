import type { Metadata } from "next";
import { URLProvider } from "@/services/client/urlProvider";
import { AuthProvider } from "@/services/client/authProvider";

export const metadata: Metadata = {
  title: "Ticket System",
  description: "An application",
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ tenant: string; }>;
}>;

export default async function TenantLayout({
  children,
  params,
}: RootLayoutProps) {
  const { tenant } = await params;
  return (
    <URLProvider tenant={tenant}>
      <AuthProvider>
        <main>
          {children}
        </main>
      </AuthProvider>
    </URLProvider>
  );
}

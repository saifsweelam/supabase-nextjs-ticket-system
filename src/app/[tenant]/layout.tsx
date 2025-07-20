import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "../globals.css";
import { AuthSubscription } from "@/components/auth-subscription";
import { URLProvider } from "@/services/client/urlProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket System",
  description: "An application",
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ tenant: string; }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { tenant } = await params;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <URLProvider tenant={tenant}>
          <main>
            {children}
          </main>
          <ToastContainer />
          <AuthSubscription />
        </URLProvider>
      </body>
    </html>
  );
}

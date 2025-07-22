import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "./globals.css";

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
}>;

export default async function RootLayout({
    children
}: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main>
                    {children}
                </main>
                <ToastContainer />
            </body>
        </html>
    );
}

import { AlertTriangle, ArrowLeft, Home, RefreshCw, Bug, Shield, Clock, Wifi } from "lucide-react";
import Link from "next/link";
import { Error } from "@/components/error";

type ErrorPageProps = {
  searchParams?: Promise<{
    type?: string;
  }>;
};

export default async function ErrorPage(props: ErrorPageProps) {
  const searchParams = await props.searchParams;
  const errorId = searchParams?.type || "page-not-found";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <Error errorId={errorId} date={new Date().toISOString()} />

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Need help? {" "}
            <Link href="/support" className="text-primary hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
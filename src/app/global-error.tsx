"use client";

import { Error } from "@/components/error";

export default function GlobalError({ error }: { error: { id?: string } }) {
    const errorId = error.id || "server-error";
    const getPath = (path: string) => path;
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-2xl space-y-8">
                <Error errorId={errorId} date={new Date().toISOString()} getPath={getPath} />
            </div>
        </div>
    )
}
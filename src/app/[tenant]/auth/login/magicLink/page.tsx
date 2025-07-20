"use client";
import { Mail, ArrowLeft, RefreshCw, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useURL } from "@/services/client/urlProvider";

export default function CheckEmailPage() {
    const { getPath } = useURL();

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <Card className="border-2">
                    <CardHeader className="text-center space-y-6">
                        <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>

                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold tracking-tight">
                                Check Your Email
                            </CardTitle>
                            <p className="text-muted-foreground text-balance">
                                We've sent a magic link to your email address.
                            </p>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="p-4 bg-muted rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-medium text-sm mb-2">What's next?</h3>
                                <ol className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">1</span>
                                        Check your email inbox
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">2</span>
                                        Click the magic link in the email
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">3</span>
                                        You'll be automatically logged in
                                    </li>
                                </ol>
                            </div>

                            <div className="text-sm text-muted-foreground space-y-2">
                                <p>
                                    <strong>Can't find the email?</strong> Check your spam folder or try the suggestions below.
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => window.location.reload()}
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Resend Magic Link
                            </Button>

                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" asChild>
                                    <Link href={getPath('/')}>
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to Login
                                    </Link>
                                </Button>

                                <Button variant="outline" asChild>
                                    <Link href="mailto:" className="inline-flex items-center">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Open Email
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <Separator />

                        <div className="text-center">
                            <p className="text-xs text-muted-foreground">
                                The magic link will expire in <strong>15 minutes</strong> for security reasons.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Having trouble? {" "}
                        <Link href={getPath('/support')} className="text-primary hover:underline">
                            Contact Support
                        </Link>
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Wrong email address? {" "}
                        <Link href={getPath('/?isMagicLink=true')} className="text-primary hover:underline">
                            Try again with a different email
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
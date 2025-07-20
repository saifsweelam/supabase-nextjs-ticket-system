"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Bug, Clock, Home, RefreshCw, Shield, Wifi } from "lucide-react";
import { useURL } from "@/services/client/urlProvider";

export type ErrorProps = {
  errorId: string;
  date: string;
}

const errorData = {
  "page-not-found": {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    icon: AlertTriangle,
    severity: "warning" as const,
    code: "404",
    suggestions: [
      "Check the URL for typos",
      "Return to the homepage",
      "Use the navigation menu to find what you're looking for"
    ],
    technicalDetails: "The requested resource could not be found on this server."
  },
  "server-error": {
    title: "Internal Server Error",
    description: "Something went wrong on our end. Our team has been notified and is working on a fix.",
    icon: Bug,
    severity: "error" as const,
    code: "500",
    suggestions: [
      "Try refreshing the page",
      "Wait a few minutes and try again",
      "Contact support if the problem persists"
    ],
    technicalDetails: "An unexpected error occurred while processing your request."
  },
  "access-denied": {
    title: "Access Forbidden",
    description: "You don't have permission to access this resource.",
    icon: Shield,
    severity: "error" as const,
    code: "403",
    suggestions: [
      "Make sure you're logged in",
      "Check if you have the necessary permissions",
      "Contact an administrator for access"
    ],
    technicalDetails: "Access to this resource is restricted."
  },
  "request-timeout": {
    title: "Request Timeout",
    description: "The request took too long to process and timed out.",
    icon: Clock,
    severity: "warning" as const,
    code: "408",
    suggestions: [
      "Check your internet connection",
      "Try again with a more stable connection",
      "Reduce the complexity of your request"
    ],
    technicalDetails: "The server timed out waiting for the request."
  },
  "bad-gateway": {
    title: "Bad Gateway",
    description: "We're experiencing connectivity issues. Please try again later.",
    icon: Wifi,
    severity: "error" as const,
    code: "502",
    suggestions: [
      "Wait a few minutes and try again",
      "Check if the service is under maintenance",
      "Contact support if the issue persists"
    ],
    technicalDetails: "The server received an invalid response from an upstream server."
  },
  "login-failed": {
    title: "Login Failed",
    description: "We couldn't log you in with the provided credentials.",
    icon: Shield,
    severity: "warning" as const,
    code: "AUTH001",
    suggestions: [
      "Check your email and password",
      "Try resetting your password",
      "Make sure your account is activated"
    ],
    technicalDetails: "Authentication failed due to invalid credentials."
  },
  "magic-link-sending-failed": {
    title: "Magic Link Sending Failed",
    description: "We couldn't send the magic link to your email. Please try again.",
    icon: Shield,
    severity: "warning" as const,
    code: "AUTH002",
    suggestions: [
      "Make sure you already have an account",
      "Make sure your email is correct",
    ],
    technicalDetails: "Failed to send magic link due to an error in the email service."
  },
  "invalid-magic-link": {
    title: "Invalid Magic Link",
    description: "The magic link is invalid or has expired. Please request a new one.",
    icon: Shield,
    severity: "error" as const,
    code: "AUTH003",
    suggestions: [
      "Request a new magic link",
      "Make sure you're using the latest email sent to you",
      "Avoid opening the link in multiple devices or browsers"
    ],
    technicalDetails: "The token in the magic link is either malformed, expired, or already used."
  },
  "session-expired": {
    title: "Session Expired",
    description: "Your session has expired. Please log in again to continue.",
    icon: Clock,
    severity: "warning" as const,
    code: "AUTH004",
    suggestions: [
      "Log in again to create a new session",
      "Enable 'Remember me' for longer sessions",
      "Check if your system clock is accurate"
    ],
    technicalDetails: "The authentication token has expired or is invalid."
  },
  "email-verification-required": {
    title: "Email Verification Required",
    description: "Please verify your email address before accessing this feature.",
    icon: AlertTriangle,
    severity: "warning" as const,
    code: "AUTH005",
    suggestions: [
      "Check your email inbox for verification link",
      "Look in your spam/junk folder",
      "Request a new verification email"
    ],
    technicalDetails: "Email verification is required to access this resource."
  },
  "insufficient-permissions": {
    title: "Insufficient Permissions",
    description: "Your account doesn't have the required permissions for this action.",
    icon: Shield,
    severity: "error" as const,
    code: "AUTH006",
    suggestions: [
      "Contact your administrator for access",
      "Check if you're using the correct account",
      "Upgrade your account if needed"
    ],
    technicalDetails: "User role does not have sufficient privileges for this operation."
  },
  "bad-request": {
    title: "Bad Request",
    description: "The request was invalid or cannot be otherwise served.",
    icon: AlertTriangle,
    severity: "error" as const,
    code: "400",
    suggestions: [
      "Check the request parameters",
      "Ensure the request format is correct",
      "Consult the API documentation for required fields"
    ],
    technicalDetails: "The server could not understand the request due to invalid syntax."
  }
};

const getSeverityColor = (severity: "error" | "warning") => {
  switch (severity) {
    case "error":
      return "bg-red-500/10 text-red-700 border-red-200 dark:text-red-400 dark:border-red-800";
    case "warning":
      return "bg-yellow-500/10 text-yellow-700 border-yellow-200 dark:text-yellow-400 dark:border-yellow-800";
    default:
      return "bg-gray-500/10 text-gray-700 border-gray-200 dark:text-gray-400 dark:border-gray-800";
  }
};

export function Error({ errorId, date }: ErrorProps) {
  const error = errorData[errorId as keyof typeof errorData] || errorData["page-not-found"];
  const { getPath } = useURL();

  return (
    <Card className="border-2">
      <CardHeader className="text-center space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center">
          <error.icon className="w-10 h-10 text-muted-foreground" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="outline"
              className={getSeverityColor(error.severity)}
            >
              Error {error.code}
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">
            {error.title}
          </CardTitle>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {error.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">What can you do?</h3>
          <ul className="space-y-2">
            {error.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1">
            <Link href={getPath("/")}>
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" onClick={() => window.location.reload()} className="flex-1">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        <Separator />

        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
            <div className="w-2 h-2 border-l border-b border-muted-foreground group-open:rotate-45 transition-transform" />
            Technical Details
          </summary>
          <div className="mt-3 p-4 bg-muted rounded-lg">
            <p className="text-sm font-mono text-muted-foreground">
              {error.technicalDetails}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Error ID: {errorId} • Timestamp: {date}
            </p>
          </div>
        </details>
      </CardContent>
    </Card>
  )
}
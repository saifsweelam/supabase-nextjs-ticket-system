"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginSideSVG } from "@/components/svg/login-side"
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser"
import { useRef } from "react"
import { toast } from "react-toastify";
import { useURL } from "@/services/client/urlProvider";
import { useAuth } from "@/services/client/authProvider";

export type LoginFormProps = React.ComponentProps<"div"> & {
    isPasswordLogin: boolean;
    type: 'recovery' | 'magiclink';
}
export function LoginForm({
  className,
  isPasswordLogin,
  type,
  ...props
}: LoginFormProps) {
  const supabase = getSupabaseBrowserClient();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { getPath } = useURL();
  const { loginWithPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (isPasswordLogin) {
      e.preventDefault();
      await toast.promise(
        loginWithPassword(emailRef.current!.value, passwordRef.current!.value),
        {
          pending: "Logging in...",
          success: "Login successful!",
          error: {
            render({ data }) {
              if (data instanceof Error) {
                return data.message || "Login failed. Please try again.";
              }
            },
          },
        }
      )
    }
  }

  return (
    <div className={cn("mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col gap-6 justify-center min-h-screen", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" method="POST" action={getPath("/auth/login")} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  {isPasswordLogin 
                    ? "Login to your Ticket System account" 
                    : "Enter your email to receive a magic link"
                  }
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  ref={emailRef}
                />
              </div>
              {isPasswordLogin && (
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href={{ pathname: getPath('/'), query: { isMagicLink: isPasswordLogin, type: "recovery" } }}
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" name="password" required ref={passwordRef} />
                </div>
              )}
              <Button type="submit" className="w-full">
                {isPasswordLogin ? "Login" : "Send Magic Link"}
              </Button>
              <div className="text-center text-sm">
                <Link 
                  href={{ pathname: getPath('/'), query: { isMagicLink: isPasswordLogin } }}
                  className="underline underline-offset-4"
                >
                  {isPasswordLogin ? "Use magic link instead" : "Use password instead"}
                </Link>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href={{ pathname: getPath('/signup') }} className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
              <input type="checkbox" name="isPasswordLogin" className="hidden" checked={isPasswordLogin} readOnly />
              <input type="hidden" name="type" value={type} readOnly />
            </div>
          </form>
          <div className="bg-muted relative hidden md:block overflow-hidden">
            <LoginSideSVG />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

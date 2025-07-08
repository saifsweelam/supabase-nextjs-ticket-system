import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export type LoginFormProps = React.ComponentProps<"div"> & {
    isPasswordLogin: boolean;
}
export function LoginForm({
  className,
  isPasswordLogin,
  ...props
}: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6 justify-center min-h-screen", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
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
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              {isPasswordLogin && (
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              )}
              <Button type="submit" className="w-full">
                {isPasswordLogin ? "Login" : "Send Magic Link"}
              </Button>
              <div className="text-center text-sm">
                <Link 
                  href={{ pathname: "", query: { isMagicLink: isPasswordLogin } }}
                  className="underline underline-offset-4"
                >
                  {isPasswordLogin ? "Use magic link instead" : "Use password instead"}
                </Link>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href={{ pathname: "signup" }} className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block overflow-hidden">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-muted-foreground/20"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
              />
              <circle
                cx="300"
                cy="300"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/20"
              />
              <circle
                cx="250"
                cy="150"
                r="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/25"
              />
              <path
                d="M50 350 Q200 250 350 350"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary/40"
              />
            </svg>
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

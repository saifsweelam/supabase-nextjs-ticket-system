import { LoginForm } from "@/components/login-form";

export type LoginPageProps = {
  searchParams?: Promise<{
    isMagicLink?: string;
    type?: 'recovery' | 'magiclink';
  }>;
};

export default async function LoginPage(props: LoginPageProps) {
  const searchParams = await props.searchParams;
  return (
    <LoginForm isPasswordLogin={!(searchParams?.isMagicLink === "true")} type={searchParams?.type || 'magiclink'} />
  );
}

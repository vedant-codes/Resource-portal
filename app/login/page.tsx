import LoginForm from "@/components/login/LoginForm";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return <LoginForm />; // no <main> wrapper
}

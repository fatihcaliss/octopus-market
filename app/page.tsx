import LoginForm from "@/components/LoginForm/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/products");
  return <LoginForm />;
}

// import { authViewPaths } from "@daveyplate/better-auth-ui/server";
import { AuthView } from "@daveyplate/better-auth-ui";

export default async function AuthPage({
  params,
}: {
  params: Promise<{ pathname?: string[] }>;
}) {
  const { pathname } = await params;
  const slug = (pathname ?? []).join("/"); // "", "sign-in", "sign-up", "settings", etc.
  return <AuthView pathname={slug || undefined} />;
}

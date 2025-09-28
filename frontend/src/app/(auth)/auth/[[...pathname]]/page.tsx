import { AuthView } from "@daveyplate/better-auth-ui";
// import { useRouter } from "next/navigation";

export default function AuthCatchAll({ pathname }: { pathname: string }) {
  // const router = useRouter();

  // const slug = (params.pathname ?? []).join("/"); // e.g. "", "sign-in", "settings", "account/settings"

  // // Normalize any old "account/*" paths to the public names AuthView expects
  // const normalized =
  //   slug === "account/settings"
  //     ? "settings"
  //     : slug === "account/security"
  //       ? "security"
  //       : slug;

  return (
    <main className="container flex grow flex-col items-center justify-center self-center p-4 md:p-6">
      <AuthView pathname={pathname} />
    </main>
  );
}

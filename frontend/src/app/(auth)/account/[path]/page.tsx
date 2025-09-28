import { AccountView } from "@daveyplate/better-auth-ui"
import { accountViewPaths } from "@daveyplate/better-auth-ui/server"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

export const dynamicParams = false

export function generateStaticParams() {
  return Object.values(accountViewPaths).map((path) => ({ path }))
}

export default async function AccountPage({
  params,
}: {
  params: { path: string }
}) {
  const { path } = params

  return (
    <main className="container p-4 md:p-6">
      <Button asChild variant="default" className="self-start mb-2">
        <Link href="/">
          <ArrowLeftIcon /> Back
        </Link>
      </Button>
      <AccountView path={path} />
    </main>
  )
}
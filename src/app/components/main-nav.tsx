import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/profile"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Explore
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Collection
      </Link>
    </nav>
  )
}

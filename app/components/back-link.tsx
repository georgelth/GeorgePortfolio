import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-neutral-400 dark:hover:text-white"
    >
      <ArrowLeftIcon aria-hidden="true" className="size-4" />
      {children}
    </Link>
  )
}

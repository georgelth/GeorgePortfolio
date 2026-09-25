import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export function ForwardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-11 items-center gap-2 font-mono text-sm text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline focus-visible:outline focus-visible:outline-offset-4 dark:text-neutral-400 dark:hover:text-white"
    >
      {children}
      <ArrowRightIcon
        aria-hidden="true"
        className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
      />
    </Link>
  )
}

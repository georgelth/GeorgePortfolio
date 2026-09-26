import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function ExternalLink({ href, children }: { href: string; children: React.ReactNode }){
  return(
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-11 items-center gap-1 font-mono text-sm underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-offset-4 text-neutral-400 hover:text-white"
    >
      {children}
      <ArrowUpRightIcon
        aria-hidden="true"
        className="size-3.5 mb-1 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
      />
    </a>
    
  )
}

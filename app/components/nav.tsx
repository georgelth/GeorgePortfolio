import Link from 'next/link'

const navItems = {
  '/': {
    name: '/~',
  },
  '/about': {
    name: '/about',
  },
  '/projects': {
    name: '/projects',
  },
  '/photos': {
    name: '/photos',
  },
  '/cars': {
    name: '/cars',
  },
  '/music': {
    name: '/music',
  },
  '/contact': {
    name: '/contact'
  }
}

export function Navbar() {
  return (
    <aside className="">
      <div className="lg:sticky lg:top-20">
        <nav
          className="font-mono text-base sm:text-2xl flex justify-center flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-wrap justify-center space-x-0 sm:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { Navbar } from 'app/components/nav'
import { buildDetails, drivingPhotos, partsList } from './data'

export const metadata: Metadata = {
  title: { absolute: 'cars' },
  description: 'My 2003 Mazda Miata NB2: an ongoing project, garage notes, and days out driving.',
}

const sectionTitle = 'font-sans text-3xl font-bold tracking-tighter sm:text-4xl'
const bodyText = 'font-mono text-base leading-7 text-neutral-700 dark:text-neutral-300'
const smallText = 'font-mono text-xs leading-5 text-neutral-600 dark:text-neutral-400'
const linkStyle = 'underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:decoration-neutral-700'

export default function Cars() {
  return (
    <main>
      <Navbar />

      <header className="mb-10 mt-12">
        <h1 className="font-sans text-5xl font-bold tracking-tighter">cars</h1>
        <p className="mt-8 max-w-3xl font-mono text-xl leading-8 tracking-tight">
          This is my 2003 Mazda Miata, a project I bought in the heat of summer
          &apos;23. An ongoing project, and a good excuse to step away from a screen.
        </p>
      </header>

      <figure>
        <Image
          src="/cars/miata-overlook.png"
          alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="aspect-[3/2] w-full object-cover sm:aspect-[16/9]"
        />
        <figcaption className={smallText + ' mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1'}>
          <span>2003 mazda miata / nb2 / owned since summer &apos;23</span>
          <span>sample image</span>
        </figcaption>
      </figure>

      <section id="the-story" aria-labelledby="story-heading" className="mt-16 scroll-mt-8 sm:mt-20">
        <h2 id="story-heading" className={sectionTitle}>my philosophy</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[2fr_1fr] sm:gap-12">
          <div className={bodyText + ' space-y-5'}>
            <p>
              One of my favorite things about building a car is that there isn't one correct way to do it. There are countless styles and directions you can take, and I've always argued that pulling ideas from several of them rather than fitting the car into one category is a lot more satisfying. A lot of that inspiration comes from friends, and the shows I attend. The goal is something cohesive, but still distinctly mine.
            </p>
            <p> A lot of my inspiration comes from the Japanese tuner cars of the 1990s and 2000s. I love the wheels, fitment, colors, graphics, and little details that gave cars from that era so much personality. I want the Miata to feel like something that could have existed in that period without trying to make it a perfect time capsule. Other choices are completely personal, and that's part of the fun.
            </p>
            <p> At the same time, I still want to actually drive the car. I love aggressive fitment and low cars, but I don't want something I'm afraid to take down a back road because of a bump in the pavement. I want the stance I'm looking for while still being able to throw it into a corner, take a long drive, or enjoy the car without sacrificing my oil pan.
            </p>
            <p> My philosophy is still form &gt; function. I'm willing to sacrifice some practicality for the look I want, but never enough that the car stops being enjoyable. A happy medium is what I'm after: something inspired by the tuner culture I grew up loving, something unmistakably mine, and something I can still grab the keys to and drive.
            </p>
          </div>
          <aside aria-label="About the car" className="border-t border-neutral-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-neutral-800">
            <Image
              src="/cars/miata-overlook.png"
              alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="aspect-[3/2] w-full object-cover sm:aspect-[16/9]"
            />
            <Image
              src="/cars/miata-overlook.png"
              alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="aspect-[3/2] w-full object-cover sm:aspect-[16/9]"
            />
            <Image
              src="/cars/miata-overlook.png"
              alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="aspect-[3/2] w-full object-cover sm:aspect-[16/9]"
            />
          </aside>
        </div>
      </section>

      <section id="on-the-car" aria-labelledby="build-heading" className="mt-16 scroll-mt-8 sm:mt-20">
        <h2 id="build-heading" className={sectionTitle}>on the car</h2>
        <p className={bodyText + ' mt-5'}>A closer look at the details, and the thinking behind them.</p>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {buildDetails.map((detail) => (
            <article key={detail.title}>
              <Image
                src={detail.src}
                alt={detail.alt}
                width={1536}
                height={1024}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 436px"
                className="aspect-[3/2] w-full object-cover"
              />
              <p className={smallText + ' mt-3'}>{detail.label} / sample</p>
              <h3 className="mt-2 font-sans text-xl font-semibold">{detail.title}</h3>
              <p className={bodyText + ' mt-3'}>{detail.description}</p>
            </article>
          ))}
        </div>
        <details className="mt-8 border-y border-neutral-200 dark:border-neutral-800">
          <summary className="cursor-pointer py-5 font-mono text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
            the parts list <span className="ml-2 text-neutral-600 dark:text-neutral-400">/ to fill in</span>
          </summary>
          <dl className="pb-5 font-mono text-sm leading-6">
            {partsList.map((part) => (
              <div key={part.category} className="grid gap-1 border-t border-neutral-200 py-3 sm:grid-cols-[1fr_2fr] sm:gap-6 dark:border-neutral-800">
                <dt>{part.category}</dt>
                <dd className="text-neutral-600 dark:text-neutral-400">{part.detail}</dd>
              </div>
            ))}
          </dl>
        </details>
      </section>

      <section id="out-driving" aria-labelledby="driving-heading" className="mb-16 mt-12 scroll-mt-8 sm:mt-16">
        <h2 id="driving-heading" className={sectionTitle}>out driving</h2>
        <p className={bodyText + ' mt-5 max-w-2xl'}>
          The days between garage sessions. Back roads, a place to pull over,
          and a few photos before heading home.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {drivingPhotos.map((photo, index) => (
            <figure key={photo.src} className={index === 0 ? 'sm:col-span-2' : ''}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1536}
                height={1024}
                sizes={index === 0 ? '(max-width: 1024px) 100vw, 896px' : '(max-width: 640px) 100vw, 436px'}
                className={(index === 0 ? 'aspect-[3/2] sm:aspect-[16/9]' : 'aspect-[3/2]') + ' w-full object-cover'}
              />
              <figcaption className={smallText + ' mt-3'}>{photo.caption} / sample image</figcaption>
            </figure>
          ))}
        </div>
        <Link href="/photos" className={linkStyle + ' mt-8 inline-flex items-center gap-2 font-mono text-sm'}>
          more through my lens <ArrowUpRightIcon aria-hidden="true" className="size-4" />
        </Link>
      </section>
    </main>
  )
}

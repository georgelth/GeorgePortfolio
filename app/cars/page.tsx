import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { Navbar } from 'app/components/nav'
import { buildDetails, partsList } from './data'
import { SectionText } from 'app/components/typeanimation'
import { ForwardLink } from 'app/components/forward-link'

export const metadata: Metadata = {
  title: { absolute: 'cars' },
  description: 'My 2003 Mazda Miata NB2: an ongoing project, garage notes, and days out driving.',
}

const sectionTitle = 'font-sans text-3xl font-bold tracking-tighter sm:text-4xl'
const bodyText = 'font-mono text-base leading-7 text-neutral-400'
const smallText = 'font-mono text-xs leading-5 text-neutral-400'
const linkStyle = 'underline underline-offset-4 transition-colors hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 decoration-neutral-700'

export default function Cars() {
  return (
    <main>
      <Navbar />

      <header className="mb-10 mt-12">
        <h1 className="font-sans text-5xl font-bold tracking-tighter">
          <SectionText title='cars'/>
        </h1>
        <p className="mt-8 max-w-3xl font-mono text-xl leading-8 tracking-tight text-neutral-400">
          This is my 2003 Mazda Miata, a project I bought in the heat of summer
          &apos;23. An ongoing project, and a good excuse to step away from a screen.
        </p>
      </header>

      <figure>
        <Image
          src="/cars/hero.jpg"
          alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="aspect-[3/2] w-full object-cover sm:aspect-[16/9]"
          style={{ objectPosition: '50% 70%' }}
        />
        <figcaption className={smallText + ' mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1'}>
          <span>2003 mazda miata / nb2 / owned since summer &apos;23</span>
        </figcaption>
      </figure>

      <section id="the-story" aria-labelledby="story-heading" className="mt-16 scroll-mt-8 sm:mt-20">
        <h2 id="story-heading" className={sectionTitle}>my philosophy</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[2fr_1fr] sm:gap-12">
          <div className={bodyText + ' space-y-5'}>
            <p>
              One of my favorite things about building a car is that <strong className='text-neutral-300'>there isn't one correct way to do it.</strong> There are countless styles and directions you can take, and I've always argued that <strong className='text-neutral-300'>pulling ideas from several styles</strong> rather than fitting the car into one category is a lot more satisfying. A lot of that inspiration comes from friends, and the shows I attend. The goal is something cohesive, but still <strong className='text-neutral-300'>distinctly mine.</strong>
            </p>
            <p> A lot of my inspiration comes from the <strong className='text-neutral-300'>Japanese tuner cars of the 1990s and 2000s.</strong> I love the wheels, fitment, colors, graphics, and little details that gave cars from that era so much personality. I want the Miata to feel like something that <em>could</em> have existed in that period without trying to make it a perfect time capsule. Other choices are completely personal, and that's part of the fun.
            </p>
            <p> At the same time, <strong className='text-neutral-300'>I still want to actually drive the car.</strong> I love aggressive fitment and low cars, but I don't want something I'm afraid to take down a back road because of a bump in the pavement. I want the stance I'm looking for while still being able to throw it into a corner, take a long drive, or enjoy the car without sacrificing my oil pan.
            </p>
            <p> <strong className='text-neutral-300'>My philosophy is still form &gt; function</strong>. I'm willing to sacrifice some practicality for the look I want, but never enough that the car stops being enjoyable. A happy medium is what I'm after: something inspired by the tuner culture I grew up loving, something unmistakably mine, and something I can still grab the keys to and drive.
            </p>
          </div>
          <aside aria-label="Sample photos illustrating my car philosophy" className="grid grid-cols-3 gap-3 border-t pt-5 sm:flex sm:flex-col sm:justify-between sm:gap-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 border-neutral-800">
            <Image
              src="/cars/square1.jpg"
              alt="first iterated version of the miata. on stock wheels, in front of a nice well lit siding of a building."
              width={2000}
              height={2000}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 256px"
              className="aspect-square h-auto w-[95%] object-cover"
            />
            <Image
              src="/cars/square2.jpg"
              alt="second iterated version of the miata. on kansei tandems, in front of a lake."
              width={2000}
              height={2000}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 256px"
              className="aspect-square h-auto w-[95%] object-cover"
            />
            <Image
              src="/cars/square3.jpg"
              alt="current iteration of the miata. on cst precedeo demon cambers, in a parking spot."
              width={2000}
              height={2000}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 256px"
              className="aspect-square h-auto w-[95%] object-cover"
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
              <p className={smallText + ' mt-3'}>{detail.label}</p>
              <h3 className="mt-2 font-sans text-xl font-semibold">{detail.title}</h3>
              <p className={bodyText + ' mt-3'}>{detail.description}</p>
            </article>
          ))}
        </div>

        <details open className="my-16 border-y border-neutral-800">
          <summary className="cursor-pointer py-5 font-mono text-sm focus-visible:outline focus-visible:outline-offset-4">
            the parts list
          </summary>
          <dl className="pb-5 font-mono text-sm leading-6">
            {partsList.map((part) => (
              <div key={part.category} className="grid gap-1 border-t py-3 sm:grid-cols-[1fr_2fr] sm:gap-6 border-neutral-800">
                <dt>{part.category}</dt>
                <dd className=" text-neutral-400">{part.detail}</dd>
              </div>
            ))}
          </dl>
        </details>
      </section>
    </main>
  )
}

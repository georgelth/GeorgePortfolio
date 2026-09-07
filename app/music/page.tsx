import type { Metadata } from 'next'
import MusicRoom from './music-room'
import { getMusicTracks } from './tracks'
import { Navbar } from 'app/components/nav'
import { SectionText } from 'app/components/typeanimation'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Music | George' },
  description: 'I make music and DJ on the side. Original tracks and mixes.',
}

export default async function Music() {
  const tracks = await getMusicTracks()
  return (
    <main className="music-page">
      <Navbar />
      <div className="my-12">
        <h1 className="font-sans text-5xl font-bold tracking-tighter">
          <SectionText title="music" />
        </h1>
        <p className="font-mono text-xl tracking-tight mt-8">
          I make music and DJ for fun. A different way of making things,
          somewhere between software and sound. 
        </p>
      </div>

      <MusicRoom tracks={tracks} />

      <section id="the-story" aria-labelledby="story-heading" className="my-16 scroll-my-8 sm:my-20">
        <h2 id="story-heading" className='font-sans text-3xl font-bold tracking-tighter sm:text-4xl'>djing</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_2fr] sm:gap-12">
          <div className='font-mono text-base leading-7 text-neutral-700 dark:text-neutral-300'>
            <p> 
              I was one of the founding members of EDM Club at Tennessee Tech University. Our mission was simple: spread good energy through music around campus and create a space for people who shared that same passion. What started as a small group of friends grew into a community where DJs, producers, and anyone who simply enjoyed the music could come together. 
            </p>
            <p> 
              <br/> 
              People naturally find plenty of reasons to disagree, but music has a strange way of making those differences feel unimportant. Some of my favorite memories came from watching a room full of completely different people share the same energy for a few hours.
            </p>
          </div>
          <aside aria-label="Sample photos illustrating my car philosophy" className="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-5 sm:flex sm:flex-col sm:justify-between sm:gap-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-neutral-800">
            <Image
              src="/cars/miata-overlook.png"
              alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
              width={1536}
              height={1024}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 256px"
              className="aspect-auto h-auto w-[100%] object-cover"
            />
          </aside>
        </div>
      </section>

      <section id="the-story" aria-labelledby="story-heading" className="my-16 scroll-my-8 sm:my-20">
        <h2 id="story-heading" className='font-sans text-3xl font-bold tracking-tighter sm:text-4xl'>production</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-[2fr_1fr] sm:gap-12">
          <aside aria-label="Sample photos illustrating my car philosophy" className="grid grid-cols-3 gap-3 border-t border-neutral-200 pt-5 sm:flex sm:flex-col sm:justify-between sm:gap-6 sm:border-r sm:border-t-0 sm:pr-6 sm:pt-0 dark:border-neutral-800">
            <Image
              src="/cars/miata-overlook.png"
              alt="AI-generated sample: a silver NB2 Miata parked at a wooded overlook in late-afternoon light"
              width={1536}
              height={1024}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 256px"
              className="aspect-auto h-auto w-[100%] object-cover"
            />
          </aside>
          <div className='font-mono text-base leading-7 text-neutral-700 dark:text-neutral-300'>
            <p>
              Once I started DJing, I had an itching curiosity to understand the music I was playing. I had already started tinkering in Garageband in middle school, but that curiosity eventually brought me back to production and led me to FL Studio in college. I've spent countless hours experimenting with sounds, techniques, and making plenty of things that will never leave my computer.
            </p>
            <p>
              <br/>
              It's become another creative outlet where I can take my influences and flip it into something uniquely <span className='italic'>me.</span> I'm still learning and experimenting, and I think that's exactly what keeps me coming back to it.
            </p>
          </div>
        </div>
      </section>

      <section id="out-driving" aria-labelledby="driving-heading" className="mb-16 mt-12 scroll-mt-8 sm:mt-16">
        <h2 id="driving-heading" className='font-sans text-3xl font-bold tracking-tighter sm:text-4xl'>events</h2>
        <p className={'font-mono text-base leading-7 text-neutral-700 dark:text-neutral-300 mt-5 max-w-2xl'}>
          Notable events that I've photographed.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* {drivingPhotos.map((photo, index) => (
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
          ))} */}
        </div>
        <Link href="/photos" className='underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline focus-visible:outline-offset-4 dark:decoration-neutral-700 mt-8 inline-flex items-center gap-2 font-mono text-sm'>
          more through my lens <ArrowUpRightIcon aria-hidden="true" className="size-4" />
        </Link>
      </section>

    </main>
  )
}

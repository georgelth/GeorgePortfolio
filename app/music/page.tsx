import type { Metadata } from 'next'
import MusicRoom from './music-room'
import { getMusicTracks } from './tracks'
import { Navbar } from 'app/components/nav'
import { SectionText } from 'app/components/typeanimation'
import Image from 'next/image'

export const metadata: Metadata = {
  title: { absolute: 'music' },
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
        <p className="mt-8 max-w-3xl font-mono text-xl leading-8 tracking-tight dark:text-neutral-400">
          I make music and DJ for fun. A different way of making things,
          somewhere between software and sound. 
        </p>
      </div>

      <MusicRoom tracks={tracks} />

      <section id="djing" aria-labelledby="djing-heading" className="my-16 scroll-my-8 sm:my-20">
        <h2 id="djing-heading" className='font-sans text-3xl font-bold tracking-tighter sm:text-4xl'>djing</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
          <div className='font-mono text-base leading-7 text-neutral-700 dark:text-neutral-300'>
            <p> 
              I was one of the founding members of EDM Club at Tennessee Tech University. Our mission was simple: spread good energy through music around campus and create a space for people who shared that same passion. What started as a small group of friends grew into a community where DJs, producers, and anyone who simply enjoyed the music could come together. Now, I DJ weddings as a side hustle.
            </p>
            <p> 
              <br/> 
              People naturally find plenty of reasons to disagree, but music has a strange way of making those differences feel unimportant. Some of my favorite memories came from watching a room full of completely different people share the same energy for a few hours.
            </p>
          </div>
          <figure className="min-w-0 border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0 dark:border-neutral-800">
            <Image
              src="/music/dj2.jpg"
              alt="DJ adjusting a mixer beside the decks under blue lighting"
              width={2160}
              height={2880}
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 60vw, 541px"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section id="production" aria-labelledby="production-heading" className="my-16 scroll-my-8 sm:my-20">
        <h2 id="production-heading" className='font-sans text-3xl font-bold tracking-tighter sm:text-4xl'>production</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-12">
          <figure className="min-w-0 border-t border-neutral-200 pt-5 md:border-r md:border-t-0 md:pr-6 md:pt-0 dark:border-neutral-800">
            <Image
              src="/music/producer.jpg"
              alt="Producing music in FL Studio at a desk with headphones and two screens"
              width={1206}
              height={1809}
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 60vw, 541px"
              className="block h-auto w-full"
            />
          </figure>
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
    </main>
  )
}

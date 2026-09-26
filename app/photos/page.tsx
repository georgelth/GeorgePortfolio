import Image from 'next/image'
import { Navbar } from '../components/nav'
import { photos } from './data'
import { SectionText } from 'app/components/typeanimation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "photos" },
  description: 'a collection of george\'s photos.',
}

export default function Photos() {
  return (
    <main>
      <Navbar />
      <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-8xl -translate-x-1/2 lg:w-[calc(100vw-12rem)] my-12">

        <div className="mb-14 max-w-4xl">
          <h1 className="font-sans text-5xl font-bold">
            <SectionText
              title='photos'
              after={
                <span className="font-mono text-[42px] text-neutral-600 ml-3">
                  {`[${String(photos.length).padStart(2, '0')}]`}
                </span>
              }/>
          </h1>

          <p className="mt-8 max-w-3xl font-mono text-xl leading-8 tracking-tight dark:text-neutral-400">
            A collection of photos I&apos;ve taken. Shot on Sony a6400
            and iPhone.
          </p>
        </div>

        <section className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-3">
          {photos.map((photo) => (
            <figure
              key={photo.src.src}
              className="mb-4 break-inside-avoid overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </section>
      </div>
    </main>
  )
}

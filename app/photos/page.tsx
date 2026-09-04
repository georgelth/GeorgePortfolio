import Image from 'next/image'
import { Navbar } from '../components/nav'
import { photos } from './data'

export default function Photos() {
  return (
    <main>
      <div className="relative left-1/2 mb-14 w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 lg:w-[calc(100vw-12rem)]">
        <Navbar />

        <div className="mb-14 max-w-4xl">
          <h1 className="font-sans text-5xl font-bold">
            photos
          </h1>

          <p className="mt-8 font-mono text-xl">
            A collection of photos I&apos;ve taken. Shot on Sony a6400
            and iPhone.
          </p>
        </div>

        <section className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
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
import type { Metadata } from 'next'
import MusicRoom from './music-room'
import { getMusicTracks } from './tracks'
import { Navbar } from 'app/components/nav'
import { SectionText } from 'app/components/typeanimation'

export const metadata: Metadata = {
  title: { absolute: 'Music | George' },
  description: 'I make music and DJ as Rako. Original tracks and mixes.',
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
          I make music and DJ as Rako. A different way of making things,
          somewhere between software and sound.
        </p>
      </div>
      <MusicRoom tracks={tracks} />
    </main>
  )
}

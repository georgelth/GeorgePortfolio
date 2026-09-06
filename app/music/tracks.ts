import { readdir } from 'node:fs/promises'
import path from 'node:path'

export type MusicTrack = {
  src: string
  title: string
}

// Files become public tracks on the next build/deployment.
export async function getMusicTracks(): Promise<MusicTrack[]> {
  const directory = path.join(process.cwd(), 'public', 'music')
  const files = await readdir(directory, { withFileTypes: true })
  return files
    .filter(file => file.isFile() && /\.mp3$/i.test(file.name))
    .sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }))
    .map(file => ({
      src: `/music/${encodeURIComponent(file.name)}`,
      title: file.name.replace(/\.mp3$/i, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim(),
    }))
}

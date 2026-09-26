import { Navbar } from '../components/nav'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { SectionText } from 'app/components/typeanimation'
import Image from 'next/image'
import { CustomMDX } from 'app/components/mdx'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'about' },
  description: 'about george howard.',
}

export default async function About() {
  const content = await readFile(
    path.join(process.cwd(), 'app', 'about', 'about.md'), 'utf-8'
  )
  
  return (
    <main>
      <Navbar />
      <div className='my-12'>
        <h1 className="font-sans text-5xl font-bold tracking-tighter">
          <SectionText title='about'/>
        </h1>
        <div className="prose case-study mt-8 font-mono text-xl leading-7">
          <CustomMDX source={content} />
        </div>
      </div>
      <div className='mb-14'>
        <h1 className="font-sans text-4xl font-bold tracking-tighter">links</h1>
        <div className='font-mono text-xl tracking-tight mt-8'>
          <div>
            <a
              href="https://github.com/georgelth"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1"
            >
              <Image
                src="/icons/GitHub_Invertocat_White.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className="underline decoration-transparent hover:decoration-gray-400 transition-colors duration-200 underline-offset-2">
                GitHub
              </span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <ArrowUpRightIcon className='size-3 mb-2 inline'/>
              </span>
            </a>
          </div>
        </div>
        <div className='font-mono text-xl tracking-tight'>
          <div>
            <a
              href="https://linkedin.com/in/georgelth"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1"
            >
              <Image
                src="/icons/linkedin-app-white-icon.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className="underline decoration-transparent hover:decoration-gray-400 transition-colors duration-200 underline-offset-2">
                LinkedIn
              </span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <ArrowUpRightIcon className='size-3 mb-2 inline'/>
              </span>
            </a>
          </div>
        </div>
        <div className='font-mono text-xl tracking-tight'>
          <div>
            <a
              href="/about/Howard_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1"
            >
              <DocumentIcon aria-hidden="true" className="size-6 shrink-0" />
              <span className="underline decoration-transparent hover:decoration-gray-400 transition-colors duration-200 underline-offset-2">
                Résumé
              </span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <ArrowUpRightIcon className='size-3 mb-2 inline'/>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='mb-14'>
        <h1 className="font-sans text-4xl font-bold tracking-tighter">tech</h1>
        <p className='font-mono text-xl tracking-tight mt-8'>
          languages
          <ArrowRightIcon className='size-5 mx-3 inline'/>
          <span className='text-neutral-400 tracking-tighter'>js / ts / python / c++ / dart / html / css</span>
        </p>
        <p className='font-mono text-xl tracking-tight mt-4'>
          frameworks
          <ArrowRightIcon className='size-5 mx-3 inline'/>
          <span className='text-neutral-400 tracking-tighter'>react / ionic / next.js / tailwind / bootstrap / node.js / express.js</span>
        </p>
        <p className='font-mono text-xl tracking-tight mt-4'>
          databases
          <ArrowRightIcon className='size-5 mx-3 inline'/>
          <span className='text-neutral-400 tracking-tighter'>mysql / mariadb / mongodb</span>
        </p>
        <p className='font-mono text-xl tracking-tight mt-4'>
          tools
          <ArrowRightIcon className='size-5 mx-3 inline'/>
          <span className='text-neutral-400 tracking-tighter'>vscode / codex / figma</span>
        </p>
      </div>
    </main>
  );
}

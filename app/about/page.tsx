import { Navbar } from '../components/nav'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function About() {
  return (
    <main>
      <Navbar />
      <div className='mb-14'>
        <h1 className="font-sans text-5xl font-bold tracking-tighter">about</h1>
        <p className='font-mono text-xl tracking-tight mt-8'>
          Hey, I'm George. I'm a recent graduate from Tennessee Tech University with a degree in Computer Science. I have a passion for web development and enjoy creating user-friendly and visually appealing websites. In my free time, I like to explore new technologies and work on personal projects to enhance my skills.
        </p>
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
              href="https://github.com/georgelth"
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
      </div>
      <div className='mb-14'>
        <h1 className="font-sans text-4xl font-bold tracking-tighter">tech</h1>
        <p className='font-mono text-xl tracking-tight mt-8'>
          languages
          <ArrowRightIcon className='size-5 mx-2 inline'/>
          js / ts / python / c++ / java / dart / html / css
        </p>
        <p className='font-mono text-xl tracking-tight mt-2'>
          frameworks
          <ArrowRightIcon className='size-5 mx-2 inline'/>
          node.js / next.js / tailwind / ionic 
        </p>
        <p className='font-mono text-xl tracking-tight mt-2'>
          tools
          <ArrowRightIcon className='size-5 mx-2 inline'/>
          vscode / codex / figma 
        </p>
      </div>
    </main>
  );
}
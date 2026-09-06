import { Navbar } from "app/components/nav"
import Image from "next/image"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { SectionText } from "app/components/typeanimation"

export default function Contact(){
  return(
    <main>
      <Navbar />
      <div className='my-12'>
        <h1 className="font-sans text-5xl font-bold tracking-tighter">
          <SectionText title='contact'/>
        </h1>
        <p className='font-mono text-xl tracking-tight mt-8'>
          Ways to get in touch.
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
  )
}
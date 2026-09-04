import Image from 'next/image'
import { Navbar } from '../components/nav'

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'The website you\'re looking at right now!',
    image: '/projects/pulse-analytics.png',
    tags: ['Next.js', 'TypeScript'],
  },
  {
    title: 'CampusWatch',
    description: 'A friendly mobile experience to help college students stay on track.',
    image: '/projects/habit-loop.png',
    tags: ['Ionic', 'TypeScript', 'Node.js', 'Java', 'MySQL'],
  },
  {
    title: 'HippoExchange',
    description: 'A Facebook Marketplace alternative',
    image: '/projects/devflow-cli.png',
    tags: ['Dart', 'Flutter', 'Node.js', 'MySQL'],
  },
  {
    title: 'LearnSpace',
    description: 'An accessible learning platform that keeps courses, lessons, and progress in one place.',
    image: '/projects/learnspace.png',
    tags: ['Next.js', 'PostgreSQL'],
  },
  {
    title: 'Particle Field',
    description: 'An interactive experiment that turns live data into a responsive particle system.',
    image: '/projects/particle-field.png',
    tags: ['WebGL', 'Three.js'],
  },
  {
    title: 'Ledger',
    description: 'A personal finance dashboard designed to make spending patterns easier to understand.',
    image: '/projects/ledger.png',
    tags: ['React', 'Data Viz'],
  },
]

export default function Projects() {
  return (
    <main>
      <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-8xl -translate-x-1/2 lg:w-[calc(100vw-12rem)] mb-14">
        <Navbar />
        <div className="mb-14 max-w-4xl">
          <h1 className="font-sans text-5xl font-bold">
            projects
            <span className='font-mono text-[42px] text-neutral-600 ml-3'>{`[${projects.length}]`}</span>
          </h1>
          <p className="mt-8 font-mono text-xl">
            A selection of things I&apos;ve designed and built, balancing useful software with thoughtful interaction.
          </p>
        </div>

        <section
          aria-label="Project gallery"
          className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article key={project.title} className="group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="mt-4">
                <h2 className="font-sans text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="font-mono mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-neutral-200 px-2.5 py-1 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

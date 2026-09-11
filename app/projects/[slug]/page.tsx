import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProject, projects } from '../data'
import { CustomMDX } from 'app/components/mdx'
import { Navbar } from 'app/components/nav'
import { BackLink } from 'app/components/back-link'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <article>
      <Navbar/>
      <header className="my-12">
        <div className="mb-6">
          <BackLink href="/projects">back to projects</BackLink>
        </div>
        <p className="font-mono text-sm text-neutral-500">
          Case study
        </p>

        <h1 className="font-sans mt-2 text-4xl font-bold md:text-6xl">
          {project.title}
        </h1>

        <p className="font-mono mt-6 max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} case study`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose case-study mt-16 font-mono leading-7">
        <CustomMDX source={project.text} />
      </div>
    </article>
  )
}

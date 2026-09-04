import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProject, projects } from '../data'

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
      <header className="mb-12">
        <p className="font-mono text-sm text-neutral-500">
          Case study
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={`${project.title} case study`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <section>
          <h2 className="text-xl font-semibold">Challenge</h2>
          <p className="mt-3 leading-7">{project.challenge}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-3 leading-7">{project.solution}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-3 leading-7">{project.outcome}</p>
        </section>
      </div>
    </article>
  )
}
import { ProjectCarousel } from 'app/components/project-carousel'
import { notFound } from 'next/navigation'
import { getProject, projects } from '../data'
import { CustomMDX } from 'app/components/mdx'
import { Navbar } from 'app/components/nav'
import { BackLink } from 'app/components/back-link'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import ExternalLink from 'app/components/external-link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "projects" },
  description: 'about george howard.',
}

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
  
  const githubUrl = project.github?.trim()
  const externalUrl = project.external?.trim()
  
  const content = await readFile(
    path.join(process.cwd(), 'content', 'projects', project.contentFile), 'utf-8'
  )
  
  return (
    <article>
      <Navbar/>
      <header className="my-12">
        <div className="mb-6">
          <BackLink href="/projects">back to projects</BackLink>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-sm text-neutral-500">Case study</p>
          <div className='flex items-center justify-between gap-4'>
            {externalUrl && (
              <ExternalLink href={externalUrl}>
                <span className="text-lg">Site</span>
              </ExternalLink>
            )}
            {githubUrl && (
              <ExternalLink href={githubUrl}>
                <span className="text-lg">GitHub</span>
              </ExternalLink>
            )}
          </div>
        </div>

        <h1 className="font-sans mt-2 text-4xl font-bold md:text-6xl">
          {project.title}
        </h1>

        <p className="font-mono mt-6 max-w-2xl text-xl italic text-neutral-400">
          {project.description}
        </p>
      </header>

      <ProjectCarousel images={project.images} title={project.title} />

      <div className="prose case-study my-16 font-mono leading-7">
        <CustomMDX source={content} />
      </div>
    </article>
  )
}

// Write case studies in Markdown using multiline template strings for text.
export const projects = [
  {
    slug: "portfolio",
    title: 'Personal Portfolio',
    description: 'The website you\'re looking at right now!',
    image: '/projects/portfolio1.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    contentFile: 'portfolio.md'
  },
  {
    slug: "campuswatch",
    title: 'CampusWatch',
    description: 'A friendly mobile experience to help college students stay on track.',
    image: '/projects/cw1.png',
    tags: ['Ionic', 'React', 'TypeScript', 'Java', 'Node.js', 'MySQL', 'GCP'],
    contentFile: 'campuswatch.md'
  },
  {
    slug: "hippoexchange",
    title: 'HippoExchange',
    description: 'A Facebook Marketplace alternative.',
    image: '/projects/hippo10.png',
    tags: ['Dart', 'Flutter', 'Node.js', 'MongoDB', 'GCP'],
    contentFile: 'hippoexchange.md'
  },
  {
    slug: "gawa",
    title: 'GAWA',
    description: 'George\'s Awesome Weather App!',
    image: '/projects/learnspace.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    contentFile: 'gawa.md'
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

// Write case studies in Markdown using multiline template strings for text.
export const projects = [
  {
    slug: "portfolio",
    title: 'Personal Portfolio',
    description: 'The website you\'re looking at right now!',
    image: '/projects/portfolio1.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    contentFile: 'portfolio.md'
  },
  {
    slug: "campuswatch",
    title: 'CampusWatch',
    description: 'A friendly mobile experience to help college students stay on track.',
    image: '/projects/habit-loop.png',
    tags: ['Ionic', 'TypeScript', 'Node.js', 'Java', 'MySQL'],
    contentFile: 'campuswatch.md'
  },
  {
    slug: "hippoexchange",
    title: 'HippoExchange',
    description: 'A Facebook Marketplace alternative.',
    image: '/projects/devflow-cli.png',
    tags: ['Dart', 'Flutter', 'Node.js', 'MySQL'],
    contentFile: ''
  },
  {
    slug: "gawa",
    title: 'GAWA',
    description: 'George\'s Awesome Weather App!',
    image: '/projects/learnspace.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    contentFile: ''
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

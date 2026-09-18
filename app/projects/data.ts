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
    contentFile: 'Teams struggled to understand their product data.'
  },
  {
    slug: "learnspace",
    title: 'LearnSpace',
    description: 'An accessible learning platform that keeps courses, lessons, and progress in one place.',
    image: '/projects/learnspace.png',
    tags: ['Next.js', 'PostgreSQL'],
    contentFile: 'Teams struggled to understand their product data.'
  },
  {
    slug: "particlefield",
    title: 'Particle Field',
    description: 'An interactive experiment that turns live data into a responsive particle system.',
    image: '/projects/particle-field.png',
    tags: ['WebGL', 'Three.js'],
    contentFile: 'Teams struggled to understand their product data.'
  },
  {
    slug: "ledger",
    title: 'Ledger',
    description: 'A personal finance dashboard designed to make spending patterns easier to understand.',
    image: '/projects/ledger.png',
    tags: ['React', 'Data Viz'],
    contentFile: 'Teams struggled to understand their product data.'
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

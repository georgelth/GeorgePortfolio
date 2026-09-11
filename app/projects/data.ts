// Write case studies in Markdown using multiline template strings for text.
export const projects = [
  {
    slug: "portfolio",
    title: 'Personal Portfolio',
    description: 'The website you\'re looking at right now!',
    image: '/projects/portfolio1.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    text: `
    # why
    I wanted to build this portfolio because I felt like a résumé could only tell part of my story. Sure, it can list the languages I know, the projects I've worked on, and the jobs I've worked at, but it fails to show how I think, what I care about, or the things that I spend my time creating.
    
    So instead of making another average portfolio that just lists my experience, I wanted to build something that felt like me. A place where I could show my work as a developer alongside other things that influence me: cars, music, photography, and whatever else I happen to be doing. Those things might not fit neatly into a résumé, but they are still a big part of how I approach creativity and problem solving.
    
    I also wanted the website itself to be a part of the portfolio. Rather than starting from a template plugging and chugging and calling it a day, I decided I wanted to design and build something from scratch where I could experiment with ideas, learn new technologies, and occasionally make things harder for myself just because I thought they would look cool.
    
    More than anything, I wanted a space than can keep evolving with me. I'll build new projects, pick up new hobbies, learn new technologies, and probably change my mind about how this website should look a hundred times. The whole point of this is to continue building and updating it as I figure out where I'm headed next.`
  },
  {
    slug: "campuswatch",
    title: 'CampusWatch',
    description: 'A friendly mobile experience to help college students stay on track.',
    image: '/projects/habit-loop.png',
    tags: ['Ionic', 'TypeScript', 'Node.js', 'Java', 'MySQL'],
    text: 'Teams struggled to understand their product data.'
  },
  {
    slug: "hippoexchange",
    title: 'HippoExchange',
    description: 'A Facebook Marketplace alternative.',
    image: '/projects/devflow-cli.png',
    tags: ['Dart', 'Flutter', 'Node.js', 'MySQL'],
    text: 'Teams struggled to understand their product data.'
  },
  {
    slug: "learnspace",
    title: 'LearnSpace',
    description: 'An accessible learning platform that keeps courses, lessons, and progress in one place.',
    image: '/projects/learnspace.png',
    tags: ['Next.js', 'PostgreSQL'],
    text: 'Teams struggled to understand their product data.'
  },
  {
    slug: "particlefield",
    title: 'Particle Field',
    description: 'An interactive experiment that turns live data into a responsive particle system.',
    image: '/projects/particle-field.png',
    tags: ['WebGL', 'Three.js'],
    text: 'Teams struggled to understand their product data.'
  },
  {
    slug: "ledger",
    title: 'Ledger',
    description: 'A personal finance dashboard designed to make spending patterns easier to understand.',
    image: '/projects/ledger.png',
    tags: ['React', 'Data Viz'],
    text: 'Teams struggled to understand their product data.'
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

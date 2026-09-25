// ALL PHOTOS
// portfolio
import portfolio from '../../public/projects/portfolio1.png'

// campuswatch

// hippoexchange
import hippo1 from '../../public/projects/hippo1.png'
import hippo2 from '../../public/projects/hippo2.png'
import hippo3 from '../../public/projects/hippo3.png'
import hippo4 from '../../public/projects/hippo4.png'
import hippo5 from '../../public/projects/hippo5.png'
import hippo6 from '../../public/projects/hippo6.png'
import hippo7 from '../../public/projects/hippo7.png'
import hippo8 from '../../public/projects/hippo8.png'

// gawa
import weather from '../../public/projects/learnspace.png'

export const projects = [
  {
    slug: "portfolio",
    title: 'Personal Portfolio',
    description: 'The website you\'re looking at right now!',
    image: '/projects/portfolio1.png',
    images: [portfolio],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    contentFile: 'portfolio.md'
  },
  {
    slug: "campuswatch",
    title: 'CampusWatch',
    description: 'A friendly mobile experience to help college students stay on track.',
    image: '/projects/cw1.png',
    images: [],
    tags: ['Ionic', 'React', 'TypeScript', 'Java', 'Node.js', 'MySQL', 'GCP'],
    contentFile: 'campuswatch.md'
  },
  {
    slug: "hippoexchange",
    title: 'HippoExchange',
    description: 'A Facebook Marketplace alternative.',
    image: '/projects/hippo10.png',
    images: [
      hippo1,
      hippo2,
      hippo3,
      hippo4,
      hippo5,
      hippo6,
      hippo7,
      hippo8,
    ],
    tags: ['Dart', 'Flutter', 'Node.js', 'MongoDB', 'GCP'],
    contentFile: 'hippoexchange.md'
  },
  {
    slug: "gawa",
    title: 'GAWA',
    description: 'George\'s Awesome Weather App!',
    image: '/projects/learnspace.png',
    images: [weather],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    contentFile: 'gawa.md'
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

// ALL PHOTOS
// portfolio
import portfolio from '../../public/projects/portfolio1.png'

// campuswatch
import cw2 from '../../public/projects/cw2.png'
import cw3 from '../../public/projects/cw3.png'
import cw4 from '../../public/projects/cw4.png'
import cw5 from '../../public/projects/cw5.png'
import cw6 from '../../public/projects/cw6.png'
import cw7 from '../../public/projects/cw7.png'
import cw8 from '../../public/projects/cw8.png'

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
import gawa from '../../public/projects/gawa.png'

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
    images: [
      cw2,
      cw6,
      cw3,
      cw4,
      cw5,
      cw7,
      cw8,
    ],
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
    image: '/projects/gawa.png',
    images: [gawa],
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    contentFile: 'gawa.md'
  },
]

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
}

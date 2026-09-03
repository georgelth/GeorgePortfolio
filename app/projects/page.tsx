import { BlogPosts } from 'app/components/posts'
import { Navbar } from '../components/nav'

export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className='mb-14'>
        <h1 className="font-sans text-5xl font-bold tracking-tighter">projects</h1>
        <p className='font-mono text-xl tracking-tight mt-8'>
          Hey, I'm George. I'm a 2026 graduate from Tennessee Tech University with a B.S. in Computer Science and a minor in Mathematics. I have a passion for software development and balancing creativity with practical use. I strive to continue building my skillsets every day in an ever-changing environment.
        </p>
      </div>
    </main>
  )
}

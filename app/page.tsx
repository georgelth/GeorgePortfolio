import { BlogPosts } from 'app/components/posts'
import { Navbar } from './components/nav'

export default function Home() {
  return (
    <section>
      <h1 className="text-5xl font-semibold tracking-tighter mt-[35%]">
        Hey, I'm George.<br />
        I build software and occasionally break cars.
      </h1>
      <Navbar />
      <div className="my-8">
      </div>
    </section>

    
  )
}

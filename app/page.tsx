import { BlogPosts } from 'app/components/posts'
import { Navbar } from './components/nav'
import { HomePageText } from './components/typeanimation'

export default function Home() {
  return (
    <section>
      <h1 className="font-sans text-5xl font-semibold tracking-tighter mt-[33%]">
        Hey, I'm George.<br />
        <span className="block h-[5em] sm:h-[3em] lg:h-[2em]">
          <HomePageText />
        </span>
      </h1>
      <div className=''>
        <Navbar />
      </div>
    </section>

    
  )
}

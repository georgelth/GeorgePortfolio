import { Navbar } from './components/nav'
import { HomePageText } from './components/typeanimation'
import FaultyTerminal from './FaultyTerminal'

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={3}
          timeScale={0.2}
          scanlineIntensity={0.3}
          glitchAmount={0}
          flickerAmount={1}
          noiseAmp={1}
          curvature={0.05}
          tint="#94a3b8"
          mouseReact
          mouseStrength={0.2}
          pageLoadAnimation
          brightness={0.4}
        />
      </div>

      <section className="pointer-events-none relative z-10 min-h-[calc(100vh-3.5rem)] text-white">
        <h1 className="pt-[30vh] font-sans text-4xl font-semibold tracking-tighter sm:text-5xl">
          Hey, I&apos;m George.
          <span className="block h-[5em] sm:h-[3em] lg:h-[2em]">
            <HomePageText />
          </span>
        </h1>
        <div className="pointer-events-auto mt-10 pb-10">
          <Navbar />
        </div>
      </section>
    </>
  )
}

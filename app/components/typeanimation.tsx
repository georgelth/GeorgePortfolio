'use client'

import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function HomePageText(){
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'
  return (
    <>
      <TypeAnimation
        sequence={[
          "I build software and occasionally break cars.", 
          3000, 
          "I build software and take nice photos.", 
          3000,
          "I build software and make beautiful computer music.", 
          3000,
          "I build software and make things move.",
          3000,
          "I like making things work.",
          3000,
          "And occasionally making them work better.",
          3000,
          "I just like making things.",
          3000,
          "I build software and keep a homelab alive.",
          3000,
          "I build software and spin records.",
          3000,
          "I build software and collect obscure Japanese car parts.",
          3000,
          "I build software and obsess over the details.",
          3000,
          "I build software and DJ after dark.",
          3000,
          "I build software and refuse to leave things stock.",
          3000,
          "I build software and figure things out as I go.",
          3000,
          "I build software and create things for fun.",
          3000,
        ]}
        className={CURSOR_CLASS_NAME}
        speed={50}
        deletionSpeed={70}
        repeat={Infinity}
        cursor
      />
      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: '_';
          animation: cursor 1.1s infinite step-start;
        } 
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        } 
      `}</style>
    </>
  )
}

export function SectionText({ title }: { title: string }) {
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'
  const pathname = usePathname()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setAnimate(!preference.matches)

    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])


  return (
    <span style={{ display: 'inline-grid', maxWidth: '100%', verticalAlign: 'bottom' }}>
      {/* Keep the full title accessible and reserve its final dimensions. */}
      <span style={{ gridArea: '1 / 1', opacity: animate ? 0 : 1 }}>
        {title}
      </span>
      {animate && (
        <>
          <TypeAnimation
            key={`${pathname}:${title}`}
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[
              200,
              title,
              (el) => el?.classList.remove(CURSOR_CLASS_NAME)
            ]}
            speed={20}
            repeat={0}
            wrapper="span"
            aria-hidden="true"
            style={{ gridArea: '1 / 1' }}
          />

          <style global jsx>{`
            .custom-type-animation-cursor::after {
              content: '_';
              animation: cursor 1.1s infinite step-start;
            }
            @keyframes cursor {
              50% {
                opacity: 1;
              }
            }  
          `}</style>
        </>
      )}
    </span>
  )
}

'use client'

import { TypeAnimation } from "react-type-animation"

export function HomePageText(){
  return (
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
      speed={50}
      deletionSpeed={70}
      repeat={Infinity}
      cursor
    />
  )
}
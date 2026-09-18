# why
I wanted to build this portfolio because I felt like a résumé could only tell part of my story. Sure, it can list the languages I know, the projects I've worked on, and the jobs I've worked at, but it fails to show how I think, what I care about, or the things that I spend my time creating.

So instead of making another average portfolio that just lists my experience, I wanted to build something that felt like me. A place where I could show my work as a developer alongside other things that influence me: cars, music, photography, and whatever else I happen to be doing. Those things might not fit neatly into a résumé, but they are still a big part of how I approach creativity and problem solving.

I also wanted the website itself to be a part of the portfolio. Rather than starting from a template plugging and chugging and calling it a day, I decided I wanted to design and build something from scratch where I could experiment with ideas, learn new technologies, and occasionally make things harder for myself just because I thought they would look cool.

More than anything, I wanted a space than can keep evolving with me. I'll build new projects, pick up new hobbies, learn new technologies, and probably change my mind about how this website should look a hundred times. The whole point of this is to continue building and updating it as I figure out where I'm headed next.

# the website
The website uses **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** for styling. Architecturally, it follows Next.js's App Router: pages are organized by route, a shared layout provides global styling and analytics, and server-rendered content is complemented by client components for interactive features. The content is displayed as TypeScript data and Markdown for now. Next step is adding an integrated CMS like Sanity to manage new entries without hardcoding everything.  

# design
I wanted to go with a really minimalistic design language for this website while sprinkling in some small animations here and there. The standout features are a mouse-reactive WebGL terminal background on the homepage, and a music room that connects audio playback to a live waveform through the Web Audio API. Lastly, included animated typing for a nice touch. Overall the website is easy to navigate, fast, and most importantly gets my story across.

# challenges
This is my first time ever using Next.js and Tailwind. Tailwind is much more verbose than any other styling framework I've used in my projects, but I've come to really enjoy using it (coming from mostly bootstrap and ionic's default styling). Another challenge that I had was implementing animations with respect to accessibility. I made certain animations respect reduced motion and didn't want the website too cluttered. Finding that balance was important and I believe it came out exactly how I envisioned.

# closing
Overall, this was a great project to refresh my software developement skills and try out new technologies before I step into the workforce.
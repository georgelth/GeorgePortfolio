# overview

GAWA, short for **George's Awesome Weather App**, was my first real introduction to web development during my junior year at Tennessee Tech University. It started as a college exercise to learn the basics of building for the web, but ended up being one of the projects that pushed me toward wanting to learn a lot more about web development.

The entire application is a **single-page application contained within one `index.html` file**. Everything from the structure and styling to the API requests and application logic lives together in that one file. It was built using **HTML, CSS, and vanilla JavaScript**, with **Bootstrap** providing the responsive layout, components, and icons.

# the app

GAWA uses the browser's **Geolocation API** to retrieve the user's coordinates before reverse geocoding them to determine their location. Those coordinates are then passed to **Open-Meteo** to retrieve current and forecasted weather data.

The application displays the **current temperature, weather conditions, daily high and low, precipitation chance, humidity, and a six-hour forecast**. Instead of simply displaying the data returned by the API, I also wanted the page itself to reflect the weather outside. GAWA interprets the weather codes returned by Open-Meteo and dynamically changes its **weather icons and background imagery** based on the current conditions and whether it is day or night.

One of my favorite parts looking back at the project is how much functionality I managed to squeeze into such a small application. There is no framework, or unnecessary bloat. It's just a browser, an `index.html` file, some APIs, and a little bit of JavaScript.

# why it matters to me

GAWA is obviously a much simpler project than the applications I've worked on since, but that's also why I wanted to keep it around. It represents one of the earliest points where **web development really clicked for me**.

There was something really satisfying about taking data from an external API and turning it into an interface that could react to the user and the world around them. Seeing the page determine my location, retrieve real weather data, and dynamically change what was displayed made me curious about how much further I could take those ideas.

What started as a junior-year college exercise ultimately **inspired me to learn more about web development** and eventually move into larger projects using technologies like **React, TypeScript, Ionic, and Next.js**. Looking back at GAWA now, I can see plenty of things I would approach differently, but I also see the project that helped start that progression.
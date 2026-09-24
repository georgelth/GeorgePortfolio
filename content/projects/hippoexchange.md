# overview
CampusWatch was my **senior capstone project** at Tennessee Tech University and easily the largest software project I worked on during college. **Built by a six-person team** in an **agile environment**, CampusWatch was designed as a **mobile-first platform** centered around making everyday campus life a little easier. The project combined study groups, attendance tracking, weather and safety information, and student connections into one application.

I worked primarily as the **lead front-end developer**, which meant I spent a lot of my time thinking about how these features actually felt to use rather than simply whether they worked. At the same time, the size of the project pushed me outside of just front-end development. I worked with our APIs, backend data, geolocation, external services, and plenty of bugs that didn't fit neatly into one part of the stack.

# the idea
Campus life involves a surprising number of disconnected systems. Students check one place for their classes, another for weather, text friends to organize study sessions, and often rely on word of mouth for things happening around campus. CampusWatch started from the idea these experiences could be centralized.

Rather than building one massive feature, we approached CampusWatch as a collection of smaller tools that shared the same goal: helping students better navigate their day on campus. That gave us the opportunity to solve several very different problems while still designing everything around a consistent experience.

# my role
My main responsibility was the front end of CampusWatch. I helped turn our ideas and backend functionality into actual user flows using Ionic and React. This included building interfaces, connecting them to our APIs, handling application state, displaying live data, and making sure moving between different parts of the app felt natural.

Being the lead front-end developer also meant that I regularly found myself working across boundaries. A problem that looked like a UI bug could actually be stale state, an unexpected API response, or a database record that no longer existed. CampusWatch taught me that building a good interface isn't isolated from the rest of the application. Understanding what is happening behind it is often what makes the difference between *patching* a problem and actually *fixing* it.

# study groups
The largest feature I worked on was the study group system. Students could create a study session for one of their courses, give it a name, class subject, location, set a maximum number of participants, and begin hosting it. Once started, all students enrolled in the same class will get a push notification that there is a study group nearby using a geofence (~500ft). Alternatively, you can view all study groups being hosted inside the app if you wanted to see more active groups. For the organizer, the app transitioned into a live host view where the organizer could see information such as the group's name, a live participant count, and how long the session had been active.

The study group feature is designed for students to help each other with their coursework. The key role of this feature is to connect students on campus.

What sounded like a relatively simple flow ended up being one of the more interesting engineering challenges in the project. Creating, hosting, ending, and then creating another group without restarting the app exposed problems with stale state and previous session data. Fixing that required me to trace the entire lifecycle of a study group rather than treating each screen as an isolated component.

# attendance coach
The Attendance Coach explored how location could be used to give students a better picture of their attendance habits. Using geolocation, the application could determine whether a student was present where they were expected to be and use that information to provide attendance-related feedback. If the attendance percentage drops below a certain threshold (~60%), a quick study group creation button will appear suggesting the user should create a study group to catch up on material for the class.

This feature gave us experience working with device capabilities that go beyond a traditional web interface. It also forced us to think about how raw information like location and attendance percentages should actually be communicated to a user in a way that is understandable and useful.

# safety navigator
CampusWatch also incorporated weather and safety information using data from the **National Weather Service**. The application could retrieve forecasts and active alerts, including watches, warnings, and advisories, and present information based on the severity of the event. There are also quick links to call campus police, help desk, medical services, and IT support directly from the app.

Working with the NWS API was one of my favorite examples of taking a huge amount of external data and deciding what actually mattered to the person using the app. Instead of simply dumping weather data onto a screen, we had to interpret forecasts, alert severity, timestamps, and conditions and turn them into something useful for a student walking around campus.

# the big bug
One bug in particular became a good lesson in how complicated application state can become. After hosting and ending a study group, creating another group during the same session could cause the application to reuse information from the previous group. The backend had already deleted the old session, but parts of the front end were still trying to reference it.

The fix wasn't a single line of code. I had to follow the complete user flow and figure out where information survived longer than it should have. I eventually reset the relevant group data, timers, participant counts, animation state, and navigation state at the appropriate points in the lifecycle. It was one of those bugs where the individual pieces all seemed correct until you looked at how they interacted over time.

# building as a team
CampusWatch was built by a six-person team using an Agile development process. That made communication just as important as writing code. Features depended on work from multiple people, and changes to an API or data structure could immediately affect someone else's part of the application.

It was also one of my first experiences working on a codebase where I couldn't know every detail of everything being built. I had to trust my teammates, communicate what I needed from their systems, explain what my own components expected, and learn how to debug problems that crossed ownership boundaries.

# tech
CampusWatch was built primarily with Ionic and React, allowing us to create a mobile-oriented application while still working with familiar web technologies. The front end communicated with a Node.js backend through APIs responsible for data such as study groups, participants, enrollment information, and other application features.

The project also incorporated geolocation, external weather data from the National Weather Service, database-backed application state, animations, and reusable UI components. More than any individual technology, though, the project taught me how all of those pieces have to cooperate to create a complete product.


# what i learned
CampusWatch changed the way I think about software development. Before this project, it was easy to think about programming assignments as isolated problems: implement the algorithm, build the page, make the API call, and move on. CampusWatch was different because decisions made in one part of the application could show up as problems somewhere completely different.

I became much more comfortable debugging unfamiliar problems, reading other people's code, tracing data through an application, and taking ownership of issues that didn't have an obvious solution. I also learned that the small details of a user experience matter. A feature technically working isn't always enough if the person using it doesn't understand what is happening.

# looking back
CampusWatch isn't a perfect application, and that's part of why I value the project so much. There are plenty of things I would design differently today, both technically and visually. Being able to recognize those things is also evidence of how much I learned while building it.

More than anything, CampusWatch was the project where a lot of the individual things I learned throughout my computer science degree finally came together. Front-end development, APIs, databases, networking, external services, teamwork, debugging, and design were no longer separate assignments. They were all pieces of the same problem, and figuring out how to make those pieces work together is what made the project memorable to me.
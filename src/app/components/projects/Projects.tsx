import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import ProjectCard from "./ProjectCard"


/*
 description:
      "Dev Union is a full-stack app enabling users to create chat rooms and collaborate on projects with real-time video calls and screen-sharing.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    githubLink: "https://github.com/MayankUghade/Code-Together",
    liveLink: "https://dev-union.vercel.app/",
    imageUrl: "/dev-union.png", 

*/
const projects = [
  {
    title: "Commsphere",
    description:
      "Epic-Energize is a fitness app with a comprehensive exercise database and rapidAPI integration, providing structured workouts.",
    tags: ["Next.js", "Socket.IO", "WebRTC", "AWS"],
    githubLink: "https://github.com/dishit7/team-chat-app",
    liveLink: "https://commsphere.dishit.dev/",
    imageUrl: "/tca.png",
  },
   {
    title: "Scrappy",
    description:
      "Epic-Energize is a fitness app with a comprehensive exercise database and rapidAPI integration, providing structured workouts.",
    tags: ["Next.js", "Flask", "BeatifulSoup X Selenium", "Docker","Gemini"],
    liveLink: "https://scrappy-livid.vercel.app/",
    githubLink: "https://github.com/dishit7/Scrappy",
    imageUrl: "/scrappy.png",
  }, {
    title: "Elyta",
    description:
      "Epic-Energize is a fitness app with a comprehensive exercise database and rapidAPI integration, providing structured workouts.",
    tags: ["Next.js", "Heygen", "Groq"],
    liveLink: "https://rishii.dev",
    githubLink: "https://github.com/dishit7/Scrappy",
    imageUrl: "/Elytra.png",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Featured Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
    </section>
  );
}

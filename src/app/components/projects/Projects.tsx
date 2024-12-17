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
      "Commsphere is a real-time team chat app featuring video calls, screen sharing, and seamless collaboration, powered by WebRTC and Socket.IO.",
    tags: ["Next.js", "Socket.IO", "WebRTC", "AWS"],
    githubLink: "https://github.com/dishit7/team-chat-app",
    liveLink: "https://commsphere.dishit.dev/",
    imageUrl: "/tca.png",
  },
  {
    title: "Scrappy",
    description:
      "Scrappy is a web scraping tool built using Flask, BeautifulSoup, and Selenium, allowing automated data extraction and containerized deployment with Docker.",
    tags: ["Next.js", "Flask", "BeautifulSoup", "Selenium", "Docker", "Gemini"],
    liveLink: "https://scrappy-livid.vercel.app/",
    githubLink: "https://github.com/dishit7/Scrappy",
    imageUrl: "/scrappy.png",
  },
  {
    title: "Elytra",
    description:
      "Elytra is an AI-powered platform that simplifies international student counseling, offering personalized video guides and resources for aspiring students.",
    tags: ["Next.js", "Heygen", "Groq", "AI"],
    liveLink: "https://rishii.dev",
    githubLink: "https://github.com/rishipatel9/Elytra",
    imageUrl: "/Elytra.png",
  },
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

import React from "react";
import { IoLogoHtml5, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <IoLogoHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <IoLogoCss3 className="text-4xl text-blue-500" /> },
  { name: "Javascript", icon: <IoLogoJavascript className="text-4xl text-yellow-500" /> },
  { name: "Typescript", icon: <BiLogoTypescript className="text-4xl text-blue-600" /> },
  { name: "ReactJS", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-4xl text-white dark:text-white" /> },
  { name: "NodeJS", icon: <IoLogoNodejs className="text-4xl text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: "Prisma", icon: <SiPrisma className="text-4xl text-emerald-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-4xl text-blue-700" /> },
  { name: "Python", icon: <IoLogoPython className="text-4xl text-yellow-600" /> },
   { name: "Pinecone", icon: <span className="text-4xl text-blue-500">🔵</span> },  // You can replace this with a custom icon
  { name: "GROQ", icon: <span className="text-4xl text-purple-500">📜</span> }, 
];

const SkillsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-12">
      <div className="skills-track flex gap-6">
        {/* Duplicated skill icons for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="skill-icon flex flex-col items-center justify-center mx-4 min-w-[100px]"
          >
            {skill.icon}
            <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;

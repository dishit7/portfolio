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
  { name: "HTML", icon: <IoLogoHtml5 className="text-4xl text-white" /> },
  { name: "CSS", icon: <IoLogoCss3 className="text-4xl text-white" /> },
  { name: "Javascript", icon: <IoLogoJavascript className="text-4xl text-white" /> },
  { name: "Typescript", icon: <BiLogoTypescript className="text-4xl text-white" /> },
  { name: "ReactJS", icon: <FaReact className="text-4xl text-white" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-4xl text-white" /> },
  { name: "NodeJS", icon: <IoLogoNodejs className="text-4xl text-white" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-4xl text-white" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-white" /> },
  { name: "Prisma", icon: <SiPrisma className="text-4xl text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-white" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-4xl text-white" /> },
  { name: "Python", icon: <IoLogoPython className="text-4xl text-white" /> },
  { name: "Pinecone", icon: <span className="text-4xl text-white">🔵</span> },   
  { name: "GROQ", icon: <span className="text-4xl text-white">📜</span> }, 
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

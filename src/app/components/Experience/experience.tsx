"use client";
import { IoCodeWorking, IoLaptopOutline } from "react-icons/io5";
import { TracingBeam } from "../ui/tracing-beam";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const experiencesData = [
  {
    title: "Bachelor of Computer Applications Degree",
    location: "Pune, India",
    organization: "Bhartiya Vidyapeeth, IMED",
    description:
      "I am nearing the completion of my computer degree, currently in the final year.",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2022-present",
  },
  {
    title: "1st-InterCollege Coding Ninja's Comp & 100x Genai Buildathon Finalist",
    location: "Pune, India",
    organization: "Self-Employed",
    description:
          `Secured the first position in the Coding Ninja’s InterCollege competition, solving a medium-level DSA problem in 15 minutes under pressure. The event was delayed, but I was able to deliver an efficient solution in a competitive environment.
           Finalist in the 100x Generative AI Buildathon, where I developed an interactive video avatar for international career counseling. My effort was recognized in the finals, where I competed with other innovative solutions and showcased my ability to deliver impactful projects using AI.
`,
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
  {
    title: "Contributed to an Open Source Repo with 7.4k stars",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "Contributed to the SuperMemory project, a popular open-source repository with over 7.4k stars. I raised a PR with an enhancement using `contentEditable` instead of textboxes, and proposed a feature to improve input handling by switching from `useState` to `useRef`, though it is still under review.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
  
  {
    title: "Freelancing",
    location: "Remote",
    organization: "Self-Employed",
    description:
      "I have been freelancing for several months, building dynamic web applications. One of my projects was a Next.js-based Discord app for a client, enabling real-time database toggling via a proxy server. Currently, I'm working on a web app for the Kuber Foundation, a home NGO.",
    icon: <IoLaptopOutline className="w-[40px] h-[40px]" />,
    date: "Ongoing",
  },
];


export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="mt-[200px] flex items-center flex-col justify-center scroll-mt-28"
      id="experience"
    >
      <h1 className="font-bold text-3xl">My Experience/Achievements</h1>
      <div>
        <TracingBeam className="sm:flex hidden">
          <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
            <div className="flex flex-col gap-10 max-w-[900px]">
              {experiencesData.map((items, index) => (
                <div key={index}>
                  <div className=" p-5 w-full border rounded-lg">
                    <h1 className="font-semibold text-2xl capitalize">
                      {items.title}
                    </h1>
                    <p className="font-normal mt-2">{items.location}</p>
                    <p className="font-normal mt-1">{items.organization}</p>
                    <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                      {items.description}
                    </p>
                    <p className="font-normal mt-5">{items.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TracingBeam>

        <section className="w-full flex sm:hidden flex-col gap-10 items-center justify-center scroll-mt-28 py-[30px] ">
          <div className="flex flex-col gap-10 max-w-[900px]">
            {experiencesData.map((items, index) => (
              <div key={index}>
                <div className=" p-5 w-full border rounded-lg">
                  <h1 className="font-semibold text-2xl capitalize">
                    {items.title}
                  </h1>
                  <p className="font-normal mt-2">{items.location}</p>
                  <p className="font-normal mt-1">{items.organization}</p>
                  <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                    {items.description}
                  </p>
                  <p className="font-normal mt-5">{items.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
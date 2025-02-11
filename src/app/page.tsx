import Header from './components/Header'
import Projects from './components/projects/Projects'
import Footer from './components/Footer'
import MarqueeDemo from './components/Skills'
import InfiniteMarquee from './components/Skills'
import SkillsMarquee from './components/Skills'
import Experience from './components/Experience/experience'
import { HoverBorderGradient } from './components/ui/hover-board-gradient'
import { FaCircle } from 'react-icons/fa6'
import GithubCalendar from './components/GithubCalendar'
 

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="relative z-10">
        <Header />

        {/* Main grid container with improved responsive spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-2 sm:px-4 max-w-7xl mx-auto">
          {/* GitHub Calendar Section */}
          <section className="bg-transparent border border-white rounded-sm col-span-1 lg:col-span-3 p-3 sm:p-6 w-full mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">GitHub Activity</h1>
            <GithubCalendar />
          </section>

          {/* Blog Section */}
               <section className="bg-transparent border border-white rounded-lg col-span-1 p-4 w-full">
            <h1 className="text-xl sm:text-2xl font-bold text-center">My Blogs</h1>
            <p className="mt-2 text-center">I'm currently working on writing more technical blogs. Meanwhile, check out my first blog:</p>
            <ul className="mt-2 text-center">
              <li className="mb-2">
                <a href="https://medium.com/@hanmadishit74/what-366-commits-taught-me-this-year-9d9f380e6b5c" className="text-blue-400 hover:underline">
                  What 366 Commits Taught Me This Year
                </a>
              </li>
            </ul>
          </section>


          {/* Skills Section */}
          <section className="bg-transparent border border-white rounded-sm col-span-1 lg:col-span-3 w-full">
            <SkillsMarquee />
          </section>

          {/* Currently Learning Section */}
          <section className="bg-transparent border border-white rounded-lg col-span-1 py-4 text-center w-full">
            <h1 className="text-xl sm:text-2xl font-bold mb-4">Currently Learning</h1>
            <div className="px-4">
              <img
                src="/langchain.png"
                alt="langchain-logo"
                className="w-full max-w-[175px] mx-auto rounded-sm"
              />
            </div>
          </section>
        </div>

        {/* Main content area */}
        <main className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 max-w-7xl">
          <Projects />
          <Experience />
        </main>

        <Footer />
      </div>
    </div>
  );
}
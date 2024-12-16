import Header from './components/Header'
import Projects from './components/projects/Projects'
import Footer from './components/Footer'
import MarqueeDemo from './components/Skills'
import InfiniteMarquee from './components/Skills'
import SkillsMarquee from './components/Skills'
import Experience from './components/Experience/experience'
import { HoverBorderGradient } from './components/ui/hover-board-gradient'
import { FaCircle } from 'react-icons/fa6'


//
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white ">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-purple-800 to-black opacity-20 z-0"></div>
      <div className="relative z-10">
       
        
        <Header />
        
        <div className='flex '>
        <section className="bg-transperant  border border-white rounded-sm w-3/4 py-6">
        <SkillsMarquee />
          </section>
           <section className="bg-transperant ml-5 border border-white rounded-lg w-3/4 py-6">
            <h1 className='text-2xl font-bold ml-5'>Currently Learning </h1>
              <img src="/langchain.png" alt="langchain-logo" className='bg-transparent p-5' />
              <HoverBorderGradient className="flex items-center gap-2 text-sm my-7">
          <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
          Open for work
        </HoverBorderGradient>
          </section >
          
 
          </div>
        <main className="container mx-auto px-4 py-16">
           
          <Projects />
          <Experience/>
        </main>
        <Footer />
      </div>
      
    </div>
  )
}


import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { FaCircle, FaDownload } from 'react-icons/fa6'
import { GrContactInfo } from 'react-icons/gr'
import { Button } from './ui/button'
import MarqueeDemo from './Skills'
import { HoverBorderGradient } from './ui/hover-board-gradient'
 
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
           
      <header className="p-6 bg-gray-900 border-b border-gray-800">
        <nav className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">
            DK
          </span>
          <div className="flex space-x-4">
            <Link href="https://github.com/dishit7" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/dishit-004db86724/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://x.com/dishit_7" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-8rem)]">
          <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="w-64 h-64 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full mx-auto spin-slow">
              <img
                src="/photo3cropped.png"
                alt="Dishit Karia"
                className="w-full h-full object-cover rounded-full"

              />

            </div>
                
          </div>
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-8"></div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Dishit Karia
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-400">Full Stack Developer</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Hi, I'm Dishit Karia—a full-stack developer with a knack for solving problems and  (and great snacks).
              <br />
              Let's build something awesome together!
            </p> 
                      <div className='flex py-4 px-2 gap-3 '>
                        <Button asChild className='  text-sm bg-white text-black  font-semibold'>
            <Link
              href="https://drive.google.com/file/d/1Q2m34MnhWiG-2_GnwZBSeObMJrEQ9lZe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="mr-2" />
              Download My Resume
            </Link>
          </Button>
          <Button asChild className='text-sm bg-white text-black  font-semibold'>
            <Link href="/#contact">
              <GrContactInfo className="mr-2 text-xl" />
              Contact Me
            </Link>
              </Button>
            </div>
            <div className='ml-20 pt-2'>
                <HoverBorderGradient className="flex items-center gap-2 text-sm  ">
          <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
          Open for work
              </HoverBorderGradient>
              </div>
          </div>
             
                   
        </div>
        
      </main> 
    </div>
  )
}


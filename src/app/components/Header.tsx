import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { FaCircle, FaDownload } from 'react-icons/fa6'
import { GrContactInfo } from 'react-icons/gr'
import { Button } from './ui/button'
import MarqueeDemo from './Skills'
import { HoverBorderGradient } from './ui/hover-board-gradient'
 
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="p-4 bg-black border-b border-b-white-500">
        <nav className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <span className="text-xl sm:text-2xl font-bold text-white">
            DK
          </span>
          <div className="flex gap-3 sm:gap-4">
            <Link href="https://github.com/dishit7" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/dishit-004db86724/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://x.com/dishit_7" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-white hover:text-gray-300 transition-colors" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-8rem)] gap-6 md:gap-0">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full mx-auto">
              <img
                src="/new-image.png"
                alt="Dishit Karia"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-8"></div>

          {/* Content Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Dishit Karia
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-gray-400">
              Full Stack Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
              Hi, I'm Dishit Karia—a full-stack developer with a knack for solving problems, good software (and great snacks).
              <br className="hidden sm:block" />
              Let's build something awesome together!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start px-2">
              <Button asChild className="text-sm bg-white text-black font-semibold w-full sm:w-auto">
                <Link
                  href="https://drive.google.com/file/d/1Q2m34MnhWiG-2_GnwZBSeObMJrEQ9lZe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2" />
                  Download My Resume
                </Link>
              </Button>
              <Button asChild className="text-sm bg-white text-black font-semibold w-full sm:w-auto">
                <Link href="/#contact">
                  <GrContactInfo className="mr-2 text-xl" />
                  Contact Me
                </Link>
              </Button>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center md:justify-start mt-4 md:ml-20">
              <HoverBorderGradient className="flex items-center gap-2 text-sm">
                <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
                Open for work
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default function Footer() {
  return (
    <footer id="contact" className="py-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-50"></div>
      <div className="container mx-auto px-4 text-center md:text-left relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          <p className="mb-2 text-gray-300">
            <span className="font-semibold">Email:</span> hanmadishit74@example.com
          </p>
          <p className="mb-2 text-gray-300">
            <span className="font-semibold">GitHub:</span> <a href="https://github.com/dishit7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">github.com/dishit7</a>
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/dishit-004db86724/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">linkedin.com/in/dishit-004db86724</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

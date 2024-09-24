import React from 'react'

function Navbar() {
  return (
    <>
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-2 animate-fade-in-up" href="#">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted bg-[#18191A] text-white">
                SN
              </span>
            </span>
            <span className="font-medium">Sumukha Sureban</span>
          </a>
          <nav className="flex items-center gap-4 animate-fade-in-up">
            <a className="hover:underline" href="#about">
              About
            </a>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
            <a className="hover:underline" href="#skills">
              Skills
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

    </>
  )
}

export default Navbar
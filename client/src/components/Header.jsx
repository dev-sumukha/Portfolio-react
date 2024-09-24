import React from 'react'
import imgSrc from '../assets/profile.jpg'

function Header() {
  return (
    <>
        <section id="hero" className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 animate-fade-in-up">
              <br />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hello, I'm Sumukha Sureban</h1>
              <p className="text-lg text-muted-foreground">
                A recent graduate with a deep passion for computer science and a relentless drive to make a transformative impact in the industry.
              </p>
              <div className="flex gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up bg-[#18191A] text-white"
                  href="#"
                >
                  View Resume
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in-up"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up">
              <img
                src={imgSrc}
                width="300"
                height="450"
                alt="Profile Picture"
                className="rounded-full"
                style={{ aspectRatio: '300 / 300', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
    </>
  )
}

export default Header
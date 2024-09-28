import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MarqueeSection } from './components/MarqueeSection'

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <MarqueeSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
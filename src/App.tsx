import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PointerGlow } from './components/layout/PointerGlow'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Achievements } from './sections/Achievements'
import { Services } from './sections/Services'
import { Contact } from './sections/Contact'

function SkipLink() {
  return (
    <a
      href="#main"
      onClick={(e) => {
        e.preventDefault()
        const el = document.getElementById('main')
        el?.focus()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-mint focus:text-ink focus:text-sm focus:font-semibold"
    >
      Skip to content
    </a>
  )
}

export default function App() {
  return (
    <>
      <SkipLink />
      <PointerGlow />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-page text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-solid focus:px-4 focus:py-2 focus:text-on-solid"
      >
        Skip to content
      </a>
      <Navbar dark={dark} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

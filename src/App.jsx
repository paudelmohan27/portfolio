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
        <Projects />
        <div className="band mx-2 mt-20 overflow-hidden rounded-[32px] pb-20 sm:mx-4 sm:mt-32 sm:rounded-[44px] sm:pb-28">
          <Skills />
          <Journey />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

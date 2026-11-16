import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Services from './components/Services.jsx'
import Faq from './components/Faq.jsx'
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
        <Ticker />
        <About />
        <Projects />
        <div className="band relative mx-2 mt-20 overflow-hidden rounded-[32px] pb-20 sm:mx-4 sm:mt-32 sm:rounded-[44px] sm:pb-28">
          <div aria-hidden="true" className="glow -top-32 -left-24 size-[420px] bg-[#3451F5]/50" />
          <div aria-hidden="true" className="glow top-1/2 -right-32 size-[460px] bg-[#6F86FF]/30" />
          <div className="relative">
            <Services />
            <Skills />
            <Journey />
          </div>
        </div>
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

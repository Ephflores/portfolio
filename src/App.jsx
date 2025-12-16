import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import useScrollProgress from './hooks/useScrollProgress'

function App() {
  const scrollProgress = useScrollProgress()

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Background detailing: radial glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,_#1f2937_1px,_transparent_1px),linear-gradient(to_bottom,_#1f2937_1px,_transparent_1px)] bg-[size:40px_40px]" />

      {/* Scroll progress bar under navbar */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-transparent z-40">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

export default App

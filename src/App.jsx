import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CrystalBackground from './components/CrystalBackground'
import SocialSidebar from './components/SocialSidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <CrystalBackground />
      <Navbar />
      <SocialSidebar />
      <div className="content-overlay">
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

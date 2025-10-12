import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <div className="bg-gray-50 text-gray-800">
      <Navbar/>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {

  return (
    <>
    <div style={{backgroundImage: "url('/bgImage.jpeg')"}} className='bg-center bg-contain'>
      <Navbar/>
      <HeroSection />
      <About />   
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App

import { Suspense, lazy } from "react";
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <div 
      style={{ backgroundImage: "url('/bgImage.jpeg')" }} 
      className="bg-center bg-cover"
    >
      <Navbar />
      <HeroSection />

      {/* Lazy load heavy sections */}
        <Suspense fallback={<div className="animate-pulse text-center py-10 text-gray-700">Loading sections...</div>}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        </Suspense>

      <Footer />
    </div>
  );
}

export default App;

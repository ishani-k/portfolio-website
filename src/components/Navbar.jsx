import React from 'react'


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 flex justify-between bg-cream/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div>
          <a href="#home" >ishani kundu.</a>
      </div>

      <div className='space-x-3'>
        
        <a href="#about">About</a>
        <a href="#experince">Journey</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div>
        <p>Hello, I am <span>Ishani</span></p>
      </div>

      <div>
        <p>A full stack developer who loves building efficint and reliable web apps.</p>
      </div>

      <div className='flex justify-center space-x-3'>
        <div>
          Resume
        </div>

        <div>
          Let's Connect
        </div>
      </div>
    </div>
  )
}

export default HeroSection
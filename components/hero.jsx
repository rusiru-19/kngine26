import React from 'react'
import "./hero.css"
import Image from 'next/image' 
import Navbar from './navbar' 
function Hero() {
  return (
    <div className='hero'>
        <div className="inverted-box">
            <Image 
                src="/images/watchdog.jpg" 
                alt="Hero Image" 
                fill
            />
            <Navbar />
    
        </div>


    </div>
  )
}

export default Hero
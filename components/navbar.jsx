import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    <div>
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
    <div className="text-white font-bold text-xl flex tracking-wider">
        <Image src="/images/logo.png" alt="KNGINE Logo" width={120} height={40} />

        <h1 className='mt-5'>KNGINE</h1>
    </div>
        
        <div className="flex gap-8 text-white text-sm font-semibold">
          <button className="hover:text-purple-400 transition-colors">GAME INTRODUCTION</button>
          <button className="hover:text-purple-400 transition-colors">SPEAKERS</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
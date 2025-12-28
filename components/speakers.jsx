'use client';

import { useState } from 'react';
import Image from 'next/image';
import './speakers.css';
export default function WatchDogsCharacters() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const characters = [
    {
      name: 'WRENCH',
      image: '/images/card1.png',
      rotation: -8,
      zIndex: 1,
      card: 'card1'

    },
    {
      name: 'NXT',
      image: '/images/speaker02.png',
      rotation: -4,
      zIndex: 2,
      card: 'card2'   
    },
    {
      name: 'MARCO DUCHANTAU',
      image: '/images/speaker1.webp',
      rotation: 0,
      zIndex: 3,
      isMain: true,
      card: 'card3'
    },
    {
      name: 'JOSH',
      image: '/images/speaker1.webp',
      rotation: 4,
      zIndex: 2,
      card: 'card4'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-200 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80')`,
          filter: 'grayscale(100%)'
        }}
      />

      {/* Top Info Box */}
      <div className="absolute top-8 right-16 card6 border-2 border-black p-4 w-48 z-20 shadow-lg">
        <div className="text-xs font-bold mb-2">MALL'S SPORT</div>
        <p className="text-xs leading-tight">
          Clothing store with brand-name sports equipment, athletic shoes, team jerseys & licensed athletic apparel.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-wider">
            <span className="text-purple-600">SPEAKER</span>
            <span className="text-gray-800">S</span>
            <span className="text-gray-400">_</span>
          </h1>
          <div className="mt-4 w-16 h-1 bg-purple-600 mx-auto" />
        </div>

        {/* Character Cards */}
        <div className="relative w-full max-w-5xl h-96 mt-20 mb-16">
          {characters.map((char, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 cursor-pointer transition-all duration-300"
              style={{
                transform: `translate(-50%, -50%) rotate(${char.rotation}deg) translateY(${hoveredCard === index ? '-20px' : '0'})`,
                marginLeft: `${(index - 1.5) * 200}px`
              }}
            
            >
              <div className={`  ${char.card} p-2  `}>
                  <Image 
                    src={char.image}
                    alt={char.name}
                    fill 
                    />
                {/* <div className="p-4 text-center">
                  <div className="text-sm font-bold tracking-wider text-gray-800">
                    {char.name}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="max-w-4xl mx-auto px-8">
          <div className=" p-6 flex ">
            <h2 className="text-2xl font-bold text-blue-600 mb-3 tracking-wider">
              MARCO DUCHANTAU 
            </h2>
            <p className="text-xs ml-5 text-gray-700 leading-relaxed">
              Marco is a veteran hacker and one of the founding members of DedSec's San Francisco division. He specializes in social engineering and physical infiltration. As a former security consultant, Marco brings tactical expertise that complements the team's technical skills. His experience in the corporate world provides valuable insights into their targets' operations. Known for his calm demeanor and strategic thinking, Marco often serves as the voice of reason during high-stakes operations.
            </p>
          </div>
        </div>
          <hr></hr>
      </div>


    </div>
  );
}
"use client";

import React, { useState } from "react";
import { Zap, Phone, Plus, Wrench } from "lucide-react";
import Image from "next/image";
const LeftArcSegmentMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    {
      icon: Phone,
      label: "Communication",
      color: "#3B82F6",
      title: "COMMUNICATION SYSTEMS",
      image:  '/images/character2.webp',
      description:
        "Access secure communication channels, encrypted messaging, and real-time network monitoring.",
    },
    {
      icon: Wrench,
      label: "Tools",
      color: "#6B7280",
      title: "HACKING TOOLS",    
      image:  '/images/character3.webp',
      description:
        "Deploy advanced hacking utilities, system exploits, and network penetration tools.",
    },
    {
      icon: Zap,
      label: "Powers",
      color: "#A855F7",
      title: "SPECIAL ABILITIES",
      image:  '/images/character4.webp',
      description:
        "Activate enhanced capabilities, boost performance, and unlock special features.",
    },
    {
      icon: Plus,
      label: "Abilities",
      color: "#10B981",
      title: "SKILL UPGRADES",
      image:  '/images/AidenRender.webp',
      description:
        "Manage character abilities, unlock new skills, and upgrade existing capabilities.",
    },
  ];

  /* -------- ARC GEOMETRY -------- */

  const createArcPath = (index) => {
    const segments = tabs.length;
    const segmentAngle = 180 / segments; // LEFT semi-circle
    const startAngle = 90 + index * segmentAngle;
    const endAngle = startAngle + segmentAngle;

    const cx = 200;
    const cy = 200;
    const outerRadius = 190;
    const innerRadius = 120;

    const polar = (angle, radius) => ({
      x: cx + radius * Math.cos((angle * Math.PI) / 180),
      y: cy + radius * Math.sin((angle * Math.PI) / 180),
    });

    const p1 = polar(startAngle, outerRadius);
    const p2 = polar(endAngle, outerRadius);
    const p3 = polar(endAngle, innerRadius);
    const p4 = polar(startAngle, innerRadius);

    return `
      M ${p1.x} ${p1.y}
      A ${outerRadius} ${outerRadius} 0 0 1 ${p2.x} ${p2.y}
      L ${p3.x} ${p3.y}
      A ${innerRadius} ${innerRadius} 0 0 0 ${p4.x} ${p4.y}
      Z
    `;
  };

  const getIconPosition = (index) => {
    const segments = tabs.length;
    const segmentAngle = 180 / segments;
    const angle = 90 + index * segmentAngle + segmentAngle / 2;
    const radius = 155;

    return {
      x: 200 + radius * Math.cos((angle * Math.PI) / 180),
      y: 200 + radius * Math.sin((angle * Math.PI) / 180),
    };
  };

  return (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
  
  {/* Background layer */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('/svg/Pattern.svg')`,
      filter: 'grayscale(100%)',
      opacity: 0.2,
    }}
  />
        
      <div className="flex items-center z-10  w-full max-w-6xl px-8">
        {/* LEFT ARC MENU */}
        <div className="relative w-[400px] h-[500px] flex-shrink-0">
      

          <svg viewBox="0 0 400 400" className=" h-full">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              const isHovered = index === hoveredTab;
              const iconPos = getIconPosition(index);

              return (
                <g key={index}>
                  {/* ARC SEGMENT */}
                  <path
                    d={createArcPath(index)}
                    fill={isActive ? tab.color : "#D1D5DB"}
                    opacity={isActive ? 1 : isHovered ? 0.65 : 0.4}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setHoveredTab(index)}
                    onMouseLeave={() => setHoveredTab(null)}
                  />

                  {/* ICON */}
                  <foreignObject
                    x={iconPos.x - 20}
                    y={iconPos.y - 20}
                    width="40"
                    height="40"
                    className="pointer-events-none"
                  >
                    <div className="flex items-center justify-center w-full h-full">
                      {React.createElement(tab.icon, {
                        className: "w-7 h-7 transition-colors duration-300",
                        style: {
                          color:
                            isActive || isHovered
                              ? "#ffffff"
                              : "#6B7280",
                        },
                      })}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
             <img
              src="/svg/tv.svg"
              alt="Aiden Pearce"
              className="h-[380px] object-contain drop-shadow-2xl"
            />
        <div className="border-r  border-4 h-100  leading-relaxed" />

        {/* RIGHT CONTENT PANEL */}
        <div className="flex-1 max-w-2xl">
          <div className=" rounded-lg p-8 ">
          
              <Image
              src= {tabs[activeTab].image}
              alt="image"
              height={200}
              width={200}
              />

            <div className="flex items-center gap-2 mt-6 text-green-600">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftArcSegmentMenu;

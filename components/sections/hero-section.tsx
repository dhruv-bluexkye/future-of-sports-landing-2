"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/layout/navbar"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden" style={{ fontFamily: "Archivo, sans-serif" }}>
      {/* Top Wave Image */}
      <div className="absolute top-0 left-0 w-full h-48 z-0" style={{top: "0px", opacity: "0.7"}}>
        <Image
          src="/images/blue-waves.jpg"
          alt="Blue Waves"
          fill
          className="object-cover"
          priority
        />
      </div>

      

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 lg:py-32 text-center max-w-7xl mx-auto min-h-screen">
        {/* Main Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-[#4d4d4d] leading-[0.9] mb-12 tracking-tight"
          style={{ fontWeight: 600 }}
        >
          Trust,
          <br />
          Global Scale,
          <br />
          Economic Value.
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-[#727f96] max-w-4xl mx-auto mb-16 leading-relaxed"
          style={{ fontWeight: 300 }}
        >
          The Future of Sports Protocol (FSP) connects real-world sports assets with on-chain innovation. From
          phone-verified tournaments to fan driven games, FSP powers a new era of trust and value in sports
        </p>

        {/* CTA Button */}
        <button
          className="gradient-button px-10 py-4 text-lg text-white transition-all duration-300"
          style={{ fontWeight: 500 }}
        >
          Request Invite
        </button>
      </main>
    </div>
  )
}

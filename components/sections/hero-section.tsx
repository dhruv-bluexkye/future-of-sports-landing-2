"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative overflow-hidden" style={{ fontFamily: "Archivo, sans-serif" }}>
      {/* Top Rainbow Gradient */}
      <div className="absolute top-0 left-0 w-full h-48 rainbow-gradient-top z-0"></div>

      {/* Bottom Rainbow Gradient - Seamless Transition */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] rainbow-gradient-bottom z-0"></div>

      {/* Mobile Menu Button - Highest Z-Index */}
      <div className="md:hidden fixed top-6 right-6 z-[200]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none hamburger-button bg-white/80 backdrop-blur-sm"
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo - Increased Size */}
        <div className="flex items-center">
          <Image src="/images/fsp-logo.svg" alt="FSP Logo" width={120} height={120} className="w-30 h-30 hover-scale" />
        </div>

        {/* Desktop Navigation Menu - Right Aligned */}
        <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
          <a
            href="#"
            className="nav-link text-[#000000] transition-all duration-300 text-base relative"
            style={{ fontWeight: 400 }}
          >
            Home
          </a>
          <a
            href="#"
            className="nav-link text-[#000000] transition-all duration-300 text-base relative"
            style={{ fontWeight: 400 }}
          >
            Council
          </a>
          <a
            href="#"
            className="nav-link text-[#000000] transition-all duration-300 text-base relative"
            style={{ fontWeight: 400 }}
          >
            Sports OS
          </a>
          <a
            href="#"
            className="nav-link text-[#000000] transition-all duration-300 text-base relative"
            style={{ fontWeight: 400 }}
          >
            Earn
          </a>
          <a
            href="#"
            className="nav-link text-[#000000] transition-all duration-300 text-base relative"
            style={{ fontWeight: 400 }}
          >
            Create
          </a>
          <button
            className="bg-[#000000] text-white hover-button px-6 py-2.5 text-sm transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            Request Access
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu with Smooth Gaussian Blur */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[100] transform ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Smooth Gaussian Blur Backdrop */}
          <div className={`absolute inset-0 bg-white/70 transition-opacity duration-500 ease-in-out mobile-menu-backdrop ${isMenuOpen ? "opacity-100 active" : "opacity-0"}`}></div>

          {/* Mobile Menu Content - Slide in from right */}
          <div className={`relative z-[110] h-full w-3/4 ml-auto flex flex-col bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between p-6">
              <Image src="/images/fsp-logo.svg" alt="FSP Logo" width={80} height={80} className="w-20 h-20" />
              {/* Empty space for hamburger button which is now positioned absolutely */}
              <div className="w-12"></div>
            </div>
            <div className="px-6 py-6 space-y-6 flex-1">
              <a
                href="#"
                className="block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300"
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300"
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Council
              </a>
              <a
                href="#"
                className="block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300"
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sports OS
              </a>
              <a
                href="#"
                className="block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300"
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Earn
              </a>
              <a
                href="#"
                className="block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300"
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Create
              </a>
              <button
                className="w-full bg-[#000000] text-white hover-button px-6 py-3 text-base mt-4 transition-all duration-300"
                style={{ fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      )}

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

        {/* CTA Button - Updated with gradient and no border radius */}
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

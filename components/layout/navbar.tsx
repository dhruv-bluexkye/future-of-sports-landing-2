"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 md:bg-transparent bg-white/30">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/fsp-logo.svg" alt="FSP Logo" width={120} height={120} className="w-30 h-30 hover-scale" />
        </Link>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex items-center justify-end space-x-8 flex-1">
        <Link
          href="/"
          className={`nav-link text-[#000000] transition-all duration-300 text-base relative ${pathname === '/' ? 'underline' : ''}`}
          style={{ fontWeight: 400 }}
        >
          Home
        </Link>
        <Link
          href="/council"
          className={`nav-link text-[#000000] transition-all duration-300 text-base relative ${pathname === '/council' ? 'underline' : ''}`}
          style={{ fontWeight: 400 }}
        >
          Council
        </Link>
        <button
          className="bg-[#000000] text-white hover-button px-6 py-2.5 text-sm transition-all duration-300"
          style={{ fontWeight: 500 }}
        >
          Request Access
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none hamburger-button bg-white/80"
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

      {/* Mobile Navigation Menu */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[100] transform ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div className={`absolute inset-0 bg-white/70 transition-opacity duration-500 ease-in-out mobile-menu-backdrop ${isMenuOpen ? "opacity-100 active" : "opacity-0"}`}></div>

          {/* Mobile Menu Content */}
          <div className={`relative z-[110] h-full w-3/4 ml-auto flex flex-col bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between p-6">
              <Link href="/">
                <Image src="/images/fsp-logo.svg" alt="FSP Logo" width={80} height={80} className="w-20 h-20" />
              </Link>
              <div className="w-12"></div>
            </div>
            <div className="px-6 py-6 space-y-6 flex-1">
              <Link
                href="/"
                className={`block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300 ${pathname === '/' ? 'underline' : ''}`}
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/council"
                className={`block text-[#000000] hover:text-[#2da2ff] text-xl py-2 transition-all duration-300 ${pathname === '/council' ? 'underline' : ''}`}
                style={{ fontWeight: 400 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Council
              </Link>
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
    </nav>
  )
} 
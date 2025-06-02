import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top Wave Pattern */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#7cb9e9] via-[#cce3fa] to-transparent opacity-80">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="url(#topGradient)"
          />
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7cb9e9" />
              <stop offset="100%" stopColor="#cce3fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#7cb9e9] via-[#cce3fa] to-transparent opacity-80">
        <svg
          className="absolute top-0 w-full h-24"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="url(#bottomGradient)"
          />
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cce3fa" />
              <stop offset="100%" stopColor="#7cb9e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo Only */}
        <div className="flex items-center">
          <Image src="/images/fsp-logo.svg" alt="FSP Logo" width={48} height={48} className="w-12 h-12" />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-[#000000] hover:text-[#4d4d4d] transition-colors text-base"
            style={{ fontWeight: 400 }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#000000] hover:text-[#4d4d4d] transition-colors text-base"
            style={{ fontWeight: 400 }}
          >
            Council
          </a>
          <a
            href="#"
            className="text-[#000000] hover:text-[#4d4d4d] transition-colors text-base"
            style={{ fontWeight: 400 }}
          >
            Sports OS
          </a>
          <a
            href="#"
            className="text-[#000000] hover:text-[#4d4d4d] transition-colors text-base"
            style={{ fontWeight: 400 }}
          >
            Earn
          </a>
          <a
            href="#"
            className="text-[#000000] hover:text-[#4d4d4d] transition-colors text-base"
            style={{ fontWeight: 400 }}
          >
            Create
          </a>
        </div>

        {/* Request Access Button */}
        <Button
          className="bg-[#000000] text-white hover:bg-[#4d4d4d] px-6 py-2.5 rounded-lg text-sm"
          style={{ fontWeight: 500 }}
        >
          Request Access
        </Button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 lg:py-32 text-center max-w-7xl mx-auto">
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
        <Button
          className="bg-[#13b5ea] text-white hover:bg-[#0073e6] px-10 py-4 text-lg rounded-lg shadow-lg"
          style={{ fontWeight: 500 }}
        >
          Request Invite
        </Button>
      </main>
    </div>
  )
}

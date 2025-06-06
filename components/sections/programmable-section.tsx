"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function ProgrammableSection() {
  const [currentText, setCurrentText] = useState("Sports")
  const [isAnimating, setIsAnimating] = useState(false)

  const texts = ["Sports", "Pickleball", "Bowling"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentText((prev) => {
          const currentIndex = texts.indexOf(prev)
          return texts[(currentIndex + 1) % texts.length]
        })
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-visible" style={{ zIndex: 50 }}>
      <div className="py-20 px-6 lg:px-12 relative" style={{ zIndex: 50 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-6 leading-tight">
                We Make{" "}
                <span
                  className={`inline-block transition-all duration-1000 ${
                    isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
                  }`}
                >
                  {currentText}
                </span>
                <br />
                Programmable
              </h2>
              <p className="text-lg text-[#727f96] mb-8 font-light leading-relaxed">
                Revolutionizing sports with advanced data analytics, blockchain, and decentralized frameworks.
              </p>
              <button className="bg-[#13b5ea] text-white hover-button px-8 py-3 font-medium transition-all duration-300">
                Join Us
              </button>
            </div>

            {/* Right Content - Tennis Player with Data Overlays */}
            <div className="relative hover-scale" style={{ zIndex: 50 }}>
              <div className="relative bg-gray-100 overflow-hidden" style={{ borderRadius: "40px", overflow: "hidden", zIndex: 50 }}>
                <Image
                  src="/images/We Make Sports Programmable Image.jpg"
                  alt="Tennis Player"
                  width={500}
                  height={600}
                  className="w-full h-auto relative"
                  style={{ zIndex: 50 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

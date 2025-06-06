import HeroSection from "@/components/sections/hero-section"
import ProgrammableSection from "@/components/sections/programmable-section"
import UseCasesSection from "@/components/sections/use-cases-section"
import StatsSection from "@/components/sections/stats-section"
import BuildingSection from "@/components/sections/building-section"
import Image from 'next/image'
import Navbar from "@/components/layout/navbar"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <div className="animate-fadeIn">
        <HeroSection />
        <div
          className="relative w-full h-72 -mt-100 -mb-60 z-20"
          style={{
            opacity: "0.7",
          }}
        >
          <Image
            src="/images/blue-waves.jpg"
            alt="Blue Waves"
            fill
            className="object-cover"
          />
        </div>
        <ProgrammableSection />
        <UseCasesSection />
        <StatsSection />
        <div
          className="relative w-full h-72 -mt-20 -mb-20 z-20"
          style={{
            opacity: "0.7",
          }}
        >
          <Image
            src="/images/blue-waves.jpg"
            alt="Blue Waves"
            fill
            className="object-cover"
          />
        </div>
        <BuildingSection />
      </div>
    </main>
  )
}

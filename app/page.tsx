import HeroSection from "@/components/sections/hero-section"
import ProgrammableSection from "@/components/sections/programmable-section"
import UseCasesSection from "@/components/sections/use-cases-section"
import StatsSection from "@/components/sections/stats-section"
import BuildingSection from "@/components/sections/building-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgrammableSection />
      <UseCasesSection />
      <StatsSection />
      <BuildingSection />
    </main>
  )
}

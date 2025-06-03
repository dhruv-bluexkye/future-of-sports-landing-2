import CouncilFooter from "@/components/council-footer"
import CouncilHero from "@/components/council/council-hero"
import CouncilContent from "@/components/council/council-content"
import CouncilMembers from "@/components/council/council-members"
import Navbar from "@/components/layout/navbar"

export default function CouncilPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content with Fade-in */}
      <div className="relative animate-fadeIn">
        {/* Hero Section */}
        <CouncilHero />

        {/* Vision Statement Section */}
        <CouncilContent />

        {/* Council Members Section */}
        <CouncilMembers />

  
      </div>
    </div>
  )
}

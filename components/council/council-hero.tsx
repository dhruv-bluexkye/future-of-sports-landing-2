import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navbar from "@/components/layout/navbar"

export default function CouncilHero() {
  return (
    <div className="relative overflow-hidden" style={{ fontFamily: "Archivo-bold, sans-serif" }}>
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
        <h1
          className="text-4xl md:text-5xl lg:text-7xl text-[#4d4d4d] leading-[0.9] mb-12 tracking-tight"
          style={{ fontFamily: "Archivo, sans-serif", fontWeight: 500, lineHeight: "1.1" }}
        >
          A members-only council of elite athletes, owners & innovators advancing sport worldwide.
        </h1>

        <Button className="bg-[#13b5ea] hover:bg-[#0073e6] text-white px-8 py-3 text-base" style={{ fontWeight: 500 }}>
          Request Invite
        </Button>
      </main>
    </div>
  )
}

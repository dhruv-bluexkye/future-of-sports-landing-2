import { Button } from "@/components/ui/button"

export default function CouncilHeader() {
  return (
    <header className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a8e0ff] via-[#d6f3ff] to-white z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-6 leading-tight">
          A members-only council of elite athletes, owners & innovators advancing sport worldwide.
        </h1>

        <div className="mt-8">
          <Button className="bg-[#13b5ea] hover:bg-[#0073e6] text-white px-8 py-2">Join Now</Button>
        </div>
      </div>
    </header>
  )
}

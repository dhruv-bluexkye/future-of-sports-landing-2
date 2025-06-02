"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useWindowWidth } from '@/hooks/use-window-width'

type UseCase = {
  description: string;
  components: {
    name: string;
    description: string;
  }[];
}

type UseCaseData = {
  [key: string]: UseCase;
}

const useCases = [
  "TRUSTLESS TOURNAMENTS",
  "ON-CHAIN PREDICTION MKT",
  "FAN ENGAGEMENT",
  "TOKENIZED EQUITY & ON-CHAIN YIELD"
] as const;

export default function UseCasesSection() {
  const [selectedUseCase, setSelectedUseCase] = useState<string>(useCases[0])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showTableOnMobile, setShowTableOnMobile] = useState(false)

  const width = useWindowWidth()
  const isLargeScreen = width ? width >= 1024 : false
  const isSmallScreen = width ? width < 1024 : false

  const useCaseData: UseCaseData = {
    "TRUSTLESS TOURNAMENTS": {
      description: "AI-verified scores, yield-boosted prize pools, instant payouts. Enable tournament organizers to run events without dispute or payment issues.",
      components: [
        { name: "Prize Vault", description: "Non-custodial escrow that generates yield on idle funds through DeFi protocols, adding 3-5% to prize pools during multi-day events." },
        { name: "Data Sensors", description: "Processes real-time inputs through phone cameras using edge AI to detect and verify physical sports events." },
        { name: "Outcome Oracle", description: "Multi-validator consensus mechanism that requires 2/3 agreement on event outcomes before settlement." }
      ]
    },
    "ON-CHAIN PREDICTION MKT": {
      description: "Decentralized prediction markets for sports events with automated market making and liquidity pools. Enable fans to trade on game outcomes and player performance.",
      components: [
        { name: "Market Maker", description: "Automated liquidity provision with dynamic pricing based on real-time event data and market sentiment." },
        { name: "Risk Engine", description: "AI-powered risk assessment system that adjusts odds and liquidity based on historical data and current conditions." },
        { name: "Liquidity Pool", description: "Decentralized pool of assets that enables instant trading and price discovery for prediction markets." },
        { name: "Settlement Layer", description: "Automated resolution system that processes outcomes and distributes winnings based on verified event results." }
      ]
    },
    "FAN ENGAGEMENT": {
      description: "Tokenized fan experiences and rewards system. Create deeper connections between fans and teams through digital collectibles and interactive experiences.",
      components: [
        { name: "NFT Marketplace", description: "Platform for trading team and player digital collectibles with unique utility and access rights." },
        { name: "Rewards Engine", description: "Points and rewards system that tracks fan engagement and distributes benefits based on participation." },
        { name: "Experience Portal", description: "Virtual and real-world event access management system for token holders." }
      ]
    },
    "TOKENIZED EQUITY & ON-CHAIN YIELD": {
      description: "Fractional ownership of sports assets with automated yield distribution. Enable fans to invest in teams and receive returns from various revenue streams.",
      components: [
        { name: "Tokenization Engine", description: "Smart contract system for creating and managing fractional ownership of sports assets." },
        { name: "Yield Distributor", description: "Automated system for collecting and distributing revenue from various sources to token holders." },
        { name: "Governance Module", description: "Voting and proposal system for token holders to participate in key decisions." },
        { name: "Compliance Layer", description: "Regulatory compliance and reporting system for managing tokenized assets." },
        { name: "Liquidity Pool", description: "Secondary market for trading tokenized sports assets with automated market making." }
      ]
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        const currentIndex = useCases.indexOf(selectedUseCase as typeof useCases[number])
        const nextIndex = (currentIndex + 1) % useCases.length
        setSelectedUseCase(useCases[nextIndex])
        setIsTransitioning(false)
      }, 300) // Half of the transition duration
    }, 4000)

    return () => clearInterval(interval)
  }, [selectedUseCase])

  const handleManualUseCaseClick = (useCase: string) => {
    setIsTransitioning(true)
    setShowTableOnMobile(false)
    setTimeout(() => {
      setSelectedUseCase(useCase)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section className="py-20 px-0">
      <div className="w-full">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-16 text-center px-6 lg:px-12">
          Header For Use
          <br />
          Cases Section
        </h2>

        <div className="grid lg:grid-cols-2 gap-0 items-start" style={{border: "1px solid #000000"}}>
          {/* Left - Use Cases and Description (always visible) */}
          <div className="space-y-8 lg:border-r lg:border-b-0 border-b border-[#000000]" style={{padding: "40px 50px"}}>
            {/* Use Cases Tags */}
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-medium text-[#4d4d4d] mb-4">Use Cases</h3>
              <div className="grid grid-cols-6" style={{ border: "1px solid #000000" }}>
                <div
                  className={`px1 py-1 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-center col-span-3 cursor-pointer transition-all duration-300 ${selectedUseCase === "TRUSTLESS TOURNAMENTS" ? "bg-[#13b5ea] text-white" : "bg-[#FFFFFF] text-black"}`}
                  style={{borderRight: "1px solid #000000", borderBottom: "1px solid #000000"}}
                  onClick={() => handleManualUseCaseClick("TRUSTLESS TOURNAMENTS")}
                >
                  TRUSTLESS TOURNAMENTS
                </div>
                <div
                  className={`px-1 py-1 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-center col-span-3 cursor-pointer transition-all duration-300 ${selectedUseCase === "ON-CHAIN PREDICTION MKT" ? "bg-[#13b5ea] text-white" : "bg-[#FFFFFF] text-black"}`}
                  style={{borderBottom: "1px solid #000000"}}
                  onClick={() => handleManualUseCaseClick("ON-CHAIN PREDICTION MKT")}
                >
                  ON-CHAIN PREDICTION MKT
                </div>
                <div
                  className={`px-1 py-1 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-center col-span-2 cursor-pointer transition-all duration-300 ${selectedUseCase === "FAN ENGAGEMENT" ? "bg-[#13b5ea] text-white" : "bg-[#FFFFFF] text-black"}`}
                  style={{borderRight: "1px solid #000000"}}
                  onClick={() => handleManualUseCaseClick("FAN ENGAGEMENT")}
                >
                  FAN ENGAGEMENT
                </div>
                <div
                  className={`px-1 py-1 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-center col-span-4 cursor-pointer transition-all duration-300 ${selectedUseCase === "TOKENIZED EQUITY & ON-CHAIN YIELD" ? "bg-[#13b5ea] text-white" : "bg-[#FFFFFF] text-black"}`}
                  onClick={() => handleManualUseCaseClick("TOKENIZED EQUITY & ON-CHAIN YIELD")}
                >
                  TOKENIZED EQUITY & ON-CHAIN YIELD
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div>
              <h4 className="text-4xl font-medium text-[#4d4d4d] mb-4">BUILD TRUSTLESS COMPETITIONS IN MINUTES</h4>
              <div className="relative h-[100px]">
                <p className={`text-gray-600 mb-6 font-light leading-relaxed absolute w-full transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  {useCaseData[selectedUseCase].description}
                </p>
              </div>
            </div>

            {/* Components Table (Visible on lg and up within this column) */}
            {isLargeScreen && (
              <div className="relative" style={{minHeight: "400px"}}>
                <div className={`bg-white shadow-sm overflow-hidden transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`} style={{border: "1px solid #000000"}}>
                  {/* Table Header */}
                  <div className="grid grid-cols-4 bg-[#13b5ea] text-white">
                    <div className="px-4 py-3 font-medium text-sm" style={{borderRight: "1px solid #000000", borderBottom: "1px solid #000000"}}>Component</div>
                    <div className="px-4 py-3 font-medium text-sm col-span-3" style={{borderBottom: "1px solid #000000"}}>Description</div>
                  </div>

                  {/* Table Rows */}
                  <div>
                    {useCaseData[selectedUseCase].components.map((component, index) => (
                      <div key={index} className="grid grid-cols-4">
                        <div className="px-4 py-4 bg-[#13b5ea] text-white font-medium text-sm" style={{borderRight: "1px solid #000000", borderBottom: index !== useCaseData[selectedUseCase].components.length - 1 ? "1px solid #000000" : "none"}}>
                          {component.name}
                        </div>
                        <div className="px-4 py-4 text-sm text-gray-700 leading-relaxed col-span-3" style={{borderBottom: index !== useCaseData[selectedUseCase].components.length - 1 ? "1px solid #000000" : "none"}}>
                          {component.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right - Image (always visible) */}
          <div className="flex flex-col justify-center items-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Main Image */}
              <div className="relative">
                <Image
                  src={selectedUseCase === "FAN ENGAGEMENT" ? "/images/fan_engagement.png" :
                       selectedUseCase === "TRUSTLESS TOURNAMENTS" ? "/images/wbl_tms.png" :
                       "/images/Prediction.png"}
                  alt={`${selectedUseCase} Interface`}
                  width={800}
                  height={1000}
                  className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                />
              </div>
            </div>
            {/* Learn More/View Less Button for Mobile */}
             {isSmallScreen && (
               <div
                 className="mt-8 text-[#13b5ea] cursor-pointer flex items-center"
                 onClick={() => setShowTableOnMobile(!showTableOnMobile)}
               >
                 {showTableOnMobile ? 'View Less ↑' : 'Learn More ↓'}
               </div>
             )}
          </div>
        </div>

        {/* Components Table (Visible on mobile below the grid with smooth expand transition) */}
        {isSmallScreen && (
          <div className={`relative mt-8 px-6 lg:px-12 transition-all duration-500 ease-in-out overflow-hidden ${showTableOnMobile ? 'max-h-[1000px]' : 'max-h-0'}`}>
             <div className={`bg-white shadow-sm overflow-hidden transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`} style={{border: "1px solid #000000"}}>
               {/* Table Header */}
               <div className="grid grid-cols-4 bg-[#13b5ea] text-white">
                 <div className="px-4 py-3 font-medium text-xs sm:text-sm" style={{borderRight: "1px solid #000000", borderBottom: "1px solid #000000"}}>Component</div>
                 <div className="px-4 py-3 font-medium text-xs sm:text-sm col-span-3" style={{borderBottom: "1px solid #000000"}}>Description</div>
               </div>

               {/* Table Rows */}
               <div>
                 {useCaseData[selectedUseCase].components.map((component, index) => (
                   <div key={index} className="grid grid-cols-4">
                     <div className="px-4 py-4 bg-[#13b5ea] text-white font-medium text-xs sm:text-sm" style={{borderRight: "1px solid #000000", borderBottom: index !== useCaseData[selectedUseCase].components.length - 1 ? "1px solid #000000" : "none"}}>
                       {component.name}
                     </div>
                     <div className="px-4 py-4 text-xs sm:text-sm text-gray-700 leading-relaxed col-span-3" style={{borderBottom: index !== useCaseData[selectedUseCase].components.length - 1 ? "1px solid #000000" : "none"}}>
                       {component.description}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        )}
      </div>
    </section>
  )
}

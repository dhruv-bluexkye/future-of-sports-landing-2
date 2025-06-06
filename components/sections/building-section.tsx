"use client"

import { useWindowWidth } from '@/hooks/use-window-width'

export default function BuildingSection() {
  const width = useWindowWidth()
  const isMobile = width ? width < 1024 : false

  return (
    <section className="py-20 border-b border-black relative overflow-hidden">
      {/* Bottom Wave Pattern */}
      <div className="w-full relative z-10">
        <div className="text-center mb-16 px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-6">
            Building Sports Apps With
            Trust & Programmability
          </h2>
          <p className="text-lg text-[#727f96] font-normal">
            LLMs, smart contracts, and a blockchain layer enable the creation of
            sports applications that combine programmability with trust.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative w-full px-6 lg:px-32">
          {/* Central Image */}
          <div className="relative w-full">
            <img
              src={isMobile ? "/images/stack-mobile.svg" : "/images/stack.svg"}
              alt="Architectural stack diagram"
              className="w-full h-auto object-contain"
            />
            {/* Mobile-only text below the stack image */}
            <div className="block lg:hidden mt-6 px-1 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-[#4d4d4d] mb-2">BLOCKCHAIN FOUNDATION LAYER</h3>
                <p className="text-base text-[#4d4d4d] mb-4">Launch First-Blood or goal-spread pools; oracle finality and APY sweetener. Create custom prediction markets for any sporting event with guaranteed settlement.</p>
              </div>
              <hr className="border-t-2 border-[#13b5ea] my-4" />
              <div>
                <h3 className="text-2xl font-semibold text-[#4d4d4d] mb-2">TRUSTLESS SPORTS APPLICATION</h3>
                <p className="text-base text-[#4d4d4d]">Launch First-Blood or goal-spread pools; oracle finality and APY sweetener. Create custom prediction markets for any sporting event with guaranteed settlement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

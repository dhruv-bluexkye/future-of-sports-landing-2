import Image from "next/image"

export default function ProgrammableSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-6 leading-tight">
                We Make Sports
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
            <div className="relative hover-scale">
              <div className="relative bg-gray-100 overflow-hidden" style={{ borderRadius: "40px" ,overflow: "hidden"}}>
                <Image
                  src="/images/We Make Sports Programmable Image.jpg"
                  alt="Tennis Player"
                  width={500}
                  
                  height={600}
                  className="w-full h-auto"
                />

             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

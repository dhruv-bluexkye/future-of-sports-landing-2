export default function BuildingSection() {
  return (
    <section className="py-20 px-6 lg:px-12 border-b border-black relative overflow-hidden">
      {/* Bottom Wave Pattern */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-6">
            Building Sports Apps With
            Trust & Programmability
          </h2>
          <p className="text-lg text-[#727f96] font-light">
            LLMs, smart contracts, and a blockchain layer enable the creation of
            sports applications that combine programmability with trust.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative flex justify-center py-10">
          {/* Central Image */}
          <div className="relative z-10">
            <img
              src="/images/stack.svg"
              alt="Architectural stack diagram"
              style={{width: "100%", height: "110%"}}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

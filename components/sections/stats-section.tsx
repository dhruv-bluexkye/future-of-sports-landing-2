export default function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Background Gradient Placeholder */}

      {/* Adjusted grid for mobile stacking and desktop columns */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Content: Text and Stats (Order adjusted for mobile) */}
        <div className="order-1 lg:order-1">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#4d4d4d] mb-8 leading-tight">
            In the age of AI, FSP is a network of real athletes and
           
            fans, secured by verifiable proof-of-play and a borderless
           
            sports economy
          </h2>

          <p className="text-lg text-[#727f96] mb-16 font-light leading-relaxed">
            Every score, payout, and equity token settles on an open
            ledger - visible to anyone, owned by you. Join by creating a
            Vault, running or delegating a Node, or simply playing one of
            our ecosystem apps to earn $FSP while you compete.
          </p>

          {/* Stats Grid (Single column on mobile, 2x2 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Stat 1: Athletes */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                {/* Using runner.svg as icon */}
                <img src="/images/runner_icon.svg" alt="Runner icon" className="w-10 h-10 mr-4" />
                <div>
                 <span className="text-4xl font-semibold text-[#4d4d4d]">7 Million +</span>
                 <p className="text-gray-600 font-regular text-xl">Athletes</p>
                </div>
              </div>
            </div>

            {/* Stat 2: Countries */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                 {/* Using runner.svg as icon - replace with world icon if available */}
                <img src="/images/runner_icon.svg" alt="World icon" className="w-10 h-10 mr-4" />
                <div>
                 <span className="text-4xl font-semibold text-[#4d4d4d]">115+</span>
                 <p className="text-gray-600 font-regular text-xl">Countries</p>
                </div>
              </div>
            </div>

            {/* Stat 3: Federations */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                 {/* Using runner.svg as icon - replace with trophy icon if available */}
                <img src="/images/runner_icon.svg" alt="Trophy icon" className="w-10 h-10 mr-4" />
                <div>
                 <span className="text-4xl font-semibold text-[#4d4d4d]">240+</span>
                 <p className="text-gray-600 font-regular text-xl">Federations</p>
                </div>
              </div>
            </div>

            {/* Stat 4: Participants */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                 {/* Using runner.svg as icon - replace with group icon if available */}
                <img src="/images/runner_icon.svg" alt="Group icon" className="w-10 h-10 mr-4" />
                <div>
                 <span className="text-4xl font-semibold text-[#4d4d4d]">150 Million+</span>
                 <p className="text-gray-600 font-regular text-xl">Participants</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Image (Order adjusted for mobile) */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
          <img
            src="/images/globe.png"
            alt="Global sports network represented by a globe"
            width={560} // Adjust width and height as needed
            height={560}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}


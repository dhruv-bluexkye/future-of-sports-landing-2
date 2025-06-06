import Image from "next/image"
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function CouncilMembers() {
  // Define data for each council member and the final item
  const councilItems: { type: string; name: string; title: string; description: string; image?: string; alt: string; logoImage?: string }[] = [
    {
      type: "member",
      name: "AMEETH\nSANKARAN",
      title: "RELIGION OF SPORTS",
      description: "Visionary business leader with extensive experience in corporate strategy, operations, and media investments.\\n\\nVisionary business leader with extensive experience in corporate strategy, operations, and media investments.",
      image: "/images/council/Ameeth-Sankaran.jpg", // Assuming .jpg extension based on user's edit
      alt: "Ameeth Sankaran",
    },
    {
      type: "member",
      name: "GOTHAM\nCHOPRA",
      title: "RELIGION OF SPORTS",
      description: "American sports documentarian, media entrepreneur, and author with extensive industry connections.\\n\\nAmerican sports documentarian, media entrepreneur, and author with extensive industry connections.",
      image: "/images/council/Gotham-Chopra.jpg", // Assuming .jpg extension
      alt: "Gotham Chopra",
    },
    {
      type: "member",
      name: "ANDREW\nLAUCK",
      title: "MAPLE PARK CAPITAL",
      description: "Managing Partner with extensive experience in private equity and investment banking.\\n\\nManaging Partner with extensive experience in private equity and investment banking.",
      image: "/images/council/Andrew-Lauck.jpg", // Assuming .jpg extension
      alt: "Andrew Lauck",
    },
    {
      type: "member",
      name: "NIKHIL\nBAHEL",
      title: "ELYSIAN PARK VENTURES",
      description: "Seasoned advisor and investor in sports, media, entertainment, and technology sectors.\\n\\nSeasoned advisor and investor in sports, media, entertainment, and technology sectors.",
      image: "/images/council/Nikhil-Bahel.jpg", // Assuming .jpg extension
      alt: "Nikhil Bahel",
    },
    {
      type: "member",
      name: "TEAM\nOMG",
      title: "WORLD BOWLING LEAGUE",
      description: "World Series Champion Mookie Betts and business partner Cam Lewis are stepping up to the lane with Team OMG. \\n\\nTeam OMG Blending MLB precision and a lifelong love for bowling in the innovative the World Bowling League.",
      image: "/images/council/Team-OMG.jpg", // Assuming .jpg extension
      alt: "Team OMG",
    },
    {
      type: "member",
      name: "SOURAV\nGHOSAL",
      title: "PRO SQUASH PLAYER",
      description: "Olympic athlete and professional squash player representing India on the global stage with multiple championship titles.\\n\\nOlympic athlete and professional squash player representing India on the global stage with multiple championship titles.",
      image: "/images/council/Sourav-Ghosal.jpg", // Assuming .jpg extension
      alt: "Sourav Ghosal",
    },
    {
      type: "logoItem", // Indicate this is the special logo/content item
      name: "LEAGUE\nSPORTS CO",
      title: "SPORTS INNOVATION",
      description: "A pioneering sports company dedicated to revolutionizing the sports landscape through innovative league formats, technology integration, and enhanced fan experiences across multiple sports disciplines.",
      logoImage: "/images/lsc_logo.jpg",
      alt: "League Sports Co Logo",
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Container allowing grid to touch edges */}
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl text-[#4d4d4d] text-center mb-16" style={{ fontWeight: 500 }}>
          Meet The Council
        </h2>

        {/* Council Members Grid */}
        <div
          className="grid md:grid-cols-2 gap-x-0 gap-y-0"
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          {councilItems.map((item, index) => (
            item.type === 'member' ? (
              // Render a standard council member item
              <div
                key={index}
                className={`px-0 pt-6 pb-0 md:px-20 md:pt-20 ${index % 2 === 0 ? 'md:border-r md:border-black' : ''}`}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: index % 2 === 0 ? "1px solid black" : "none",
                }}
              >
                {/* Info Card */}
                <div className="bg-white p-0 px-0 md:px-0">
                  {/* Flex container for name/title and description - column on mobile, row on desktop */}
                  <div className="flex flex-col md:flex-row items-start md:justify-between mb-4 px-4 md:px-0">
                    {/* Name and Title block */}
                    <div className="mb-6 md:mb-0">
                      <p className="text-xs text-gray-500 mb-1">//COUNCIL</p>
                      <h3 className="text-2xl text-[#4d4d4d] mb-2" style={{ fontWeight: 600, whiteSpace: 'pre-wrap' }}>
                        {item.name}
                      </h3>
                      <div className="border border-gray-300 px-3 py-1 inline-block mt-2">
                        <span className="text-xs text-gray-700">{item.title}</span>
                      </div>
                    </div>
                    {/* Description block */}
                    <div className="text-left md:text-right w-full md:w-auto">
                      <p className="text-sm text-gray-600 mt-4 md:mt-0 max-w-xs leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Portrait */}
                <div className="bg-[#6B9EFF]" style={{ borderTop: "30px solid #80ABFF", borderLeft: "30px solid #80ABFF", borderRight: "30px solid #80ABFF" }}>
                  <div
                    className="aspect-[4/3.7] overflow-hidden"
                  >
                    <Image
                      src={item.image as string}
                      alt={item.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Render the special logo/content item spanning two columns
              <div key={index} className="md:col-span-2 grid md:grid-cols-2 gap-0 border-b border-black">
                {/* Left side - Pattern and Logo */}
                <div className="relative flex items-center justify-center px-0 py-8 md:p-10 border-r border-black"
                  style={{
                    background: `repeating-linear-gradient(0deg, transparent, transparent 79px, #ccc 80px),
                                 repeating-linear-gradient(90deg, transparent, transparent 79px, #ccc 80px)`,
                    backgroundColor: '#fff',
                    backgroundSize: '80px 80px',
                  }}
                >
                  <Image
                    src={item.logoImage as string}
                    alt={item.alt}
                    width={400}
                    height={400}
                    style={{
                     minWidth: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                    }}  
                    className="relative z-10"
                  />
                </div>

                {/* Right side - Content */}
                <div className="bg-white px-0 py-8 md:p-20 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 mb-1">//COUNCIL</p>
                  <h3 className="text-3xl text-[#4d4d4d] mb-4" style={{ fontWeight: 600, whiteSpace: 'pre-wrap' }}>
                    {item.name}
                  </h3>
                  <div className="border border-gray-300 px-3 py-1 inline-block self-start mb-4">
                    <span className="text-xs text-gray-700">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

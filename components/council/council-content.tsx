import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CouncilContent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-2 sm:gap-4">
              {/* Top Row - Two Images Side by Side */}
              <div className="col-span-6 sm:col-span-7 z-20">
                <Image
                  src="/images/image-1.jpg"
                  alt="Athletes Portrait"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                  style={{ aspectRatio: '1/1.1' }}
                />
              </div>
              <div className="col-span-6 sm:col-span-5 z-30">
                <Image
                  src="/images/image-3.jpg"
                  alt="Athlete Portrait"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg "
                  style={{ aspectRatio: '1/1.1' }}
                />
              </div>
              {/* Bottom - Team Photo (overlapping top row) */}
              <div className="col-span-12  sm:-mt-12 flex justify-center z-10">
                <div className="w-11/12 sm:w-10/12">
                  <Image
                    src="/images/image-2.jpg"
                    alt="Team Photo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl "
                    style={{ aspectRatio: '2.2/1' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl text-[#4d4d4d] leading-tight" style={{ fontWeight: 500 }}>
              We are operators owners of sports teams and technology
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                The Future of Sports Council brings together the most influential figures in sports to collaborate,
                innovate, and drive meaningful change across the global sports landscape. Our members represent the
                pinnacle of achievement in their respective fields.
              </p>

              <p className="leading-relaxed">
                The Future of Sports Council brings together the most influential figures in sports to collaborate,
                innovate, and drive meaningful change across the global sports landscape. Our members represent the
                pinnacle of achievement in their respective fields.
              </p>
            </div>

            <Button
              className="bg-[#13b5ea] hover:bg-[#0073e6] text-white px-8 py-3 text-base mt-8"
              style={{ fontWeight: 500 }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

export default function CouncilPartners() {
  return (
    <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* LSC Logo Section */}
      <div className="mb-16">
        <div className="bg-[#0047AB] p-12 flex justify-center items-center">
          <div className="text-white text-5xl font-bold">LSC</div>
        </div>
      </div>

      {/* Join Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#4d4d4d] mb-4">Looking to join our council?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for visionary leaders and innovators in the sports industry to join our exclusive
            council.
          </p>
        </div>
        <div>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2">Apply Now</Button>
        </div>
      </div>
    </section>
  )
}

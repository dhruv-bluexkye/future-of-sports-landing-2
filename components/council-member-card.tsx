import Image from "next/image"

interface CouncilMemberCardProps {
  name: string
  title: string
  description: string
  imageSrc: string
  smallCard?: boolean
}

export default function CouncilMemberCard({
  name,
  title,
  description,
  imageSrc,
  smallCard = false,
}: CouncilMemberCardProps) {
  return (
    <div className={`bg-white border border-gray-100 shadow-sm ${smallCard ? "flex gap-6" : ""}`}>
      {/* Image */}
      <div className={`${smallCard ? "w-1/3" : "w-full"}`}>
        <div className="relative aspect-square">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${smallCard ? "w-2/3" : ""}`}>
        <h3 className="text-lg font-semibold text-[#4d4d4d]">{name}</h3>
        <p className="text-sm text-[#13b5ea] font-medium mb-3">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

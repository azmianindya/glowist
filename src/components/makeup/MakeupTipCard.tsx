import { ChevronRight } from "lucide-react"

type MakeupTipCardProps = {
  title: string
  description: string
  image: string
}

const MakeupTipCard = ({
  title,
  description,
  image,
}: MakeupTipCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-2">
      {/* Image */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-pink-100">
        <span className="text-[9px] text-gray-400">
          {image}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="text-[11px] font-semibold text-pink-700">
          {title}
        </div>

        <div className="line-clamp-2 text-[9px] leading-relaxed text-gray-500">
          {description}
        </div>
      </div>

      <ChevronRight
        size={16}
        className="shrink-0 text-pink-500"
      />
    </div>
  )
}

export default MakeupTipCard
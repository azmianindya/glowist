import { Lightbulb } from "lucide-react"

type SkinTipProps = {
  title: string
  description: string
}

const SkinTip = ({
  title,
  description,
}: SkinTipProps) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-pink-100 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
        <Lightbulb
          size={20}
          className="text-pink-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold text-pink-700">
          {title}
        </div>

        <div className="text-xs leading-relaxed text-gray-600">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SkinTip
import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: number
  caption: string
  icon: LucideIcon
  onClick?: () => void
}

const StatCard = ({ title, value, caption, icon: Icon, onClick }: StatCardProps) => {
  return (
    <div className="flex flex-col w-52 h-56 bg-pink-200 rounded-xl p-5 gap-2">
      <div className="mt-2 w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-sm font-medium text-gray-700">{title}</div>
      <div className="flex flex-row items-center justify-between gap-5">
        <div className="font-semibold text-3xl">{value}</div>
        <button
          onClick={onClick}
          className="flex w-9 h-9 bg-pink-300 items-center justify-center rounded-full"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="text-xs text-gray-500">{caption}</div>
    </div>
  )
}

export default StatCard
import { ArrowRight } from "lucide-react"

type SectionHeaderProps = {
  title: string
  actionLabel?: string
  onActionClick?: () => void
}

const SectionHeader = ({ title, actionLabel = "See all", onActionClick }: SectionHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between mb-2">
      <div className="font-semibold">{title}</div>
      <button
        onClick={onActionClick}
        className="flex items-center gap-1 text-sm text-pink-500 hover:text-pink-600"
      >
        {actionLabel} <ArrowRight size={14} />
      </button>
    </div>
  )
}

export default SectionHeader
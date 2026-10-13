type MakeupSectionHeaderProps = {
  title: string
  icon?: React.ReactNode
  actionLabel?: string
}

const MakeupSectionHeader = ({
  title,
  icon,
  actionLabel = "Lihat Semua →",
}: MakeupSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}

        <h2 className="text-lg font-semibold text-pink-700">
          {title}
        </h2>
      </div>

      <button className="text-sm font-medium text-pink-500 transition hover:text-pink-600">
        {actionLabel}
      </button>
    </div>
  )
}

export default MakeupSectionHeader
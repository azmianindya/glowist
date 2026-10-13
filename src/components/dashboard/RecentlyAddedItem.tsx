import { Plus } from "lucide-react"
import CategoryBadge from "./CategoryBadge"

type RecentlyAddedItemProps = {
  name: string
  category: string
  categoryClassName?: string
  formattedPrice: string
  image?: string
  onAdd?: () => void
}

const RecentlyAddedItem = ({
  name,
  category,
  categoryClassName,
  formattedPrice,
  image,
  onAdd,
}: RecentlyAddedItemProps) => {
  return (
    <div className="flex flex-row items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="w-14 h-14 rounded-lg bg-pink-50 shrink-0 overflow-hidden">
        {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="text-sm font-medium">{name}</div>
        <CategoryBadge category={category} className={categoryClassName} />
        <div className="text-sm text-gray-500">{formattedPrice}</div>
      </div>
      <button
        onClick={onAdd}
        className="flex w-8 h-8 rounded-full bg-pink-100 items-center justify-center shrink-0 hover:bg-pink-200 transition"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}

export default RecentlyAddedItem
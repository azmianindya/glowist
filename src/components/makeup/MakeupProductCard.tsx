import { Heart, Plus, Star } from "lucide-react"

type MakeupProductCardProps = {
  name: string
  category: string
  price: number
  rating: number
  reviews: string
  badge?: string | null
}

const MakeupProductCard = ({
  name,
  category,
  price,
  rating,
  reviews,
  badge,
}: MakeupProductCardProps) => {
  const formattedPrice = `Rp ${price.toLocaleString("id-ID")}`

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-pink-100 bg-white">
      {/* Image */}
      <div className="relative flex h-28 items-center justify-center bg-pink-50">
        {badge && (
          <div className="absolute right-2 top-2 rounded-full bg-pink-500 px-2 py-1 text-[9px] font-medium text-white">
            {badge}
          </div>
        )}

        <div className="text-xs text-gray-400">
          Product Image
        </div>

        <button className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-pink-500 shadow-sm">
          <Heart size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 p-3">
        <div className="text-[10px] text-pink-500">
          {category}
        </div>

        <div className="line-clamp-1 text-xs font-semibold text-gray-800">
          {name}
        </div>

        <div className="text-xs font-medium text-gray-700">
          {formattedPrice}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star
            size={12}
            fill="currentColor"
            className="text-pink-500"
          />

          <span className="text-[10px] text-gray-500">
            {rating} ({reviews})
          </span>
        </div>
      </div>

      {/* Add Button */}
      <div className="px-3 pb-3">
        <button className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-white">
          <Plus size={15} />
        </button>
      </div>
    </div>
  )
}

export default MakeupProductCard
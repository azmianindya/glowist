import { Heart } from "lucide-react"
import CategoryBadge from "./CategoryBadge"

type PopularProductCardProps = {
  name: string
  category: string
  categoryClassName?: string
  formattedPrice: string
  image?: string
  isLiked: boolean
  onToggleLike: () => void
}

const PopularProductCard = ({
  name,
  category,
  categoryClassName,
  formattedPrice,
  image,
  isLiked,
  onToggleLike,
}: PopularProductCardProps) => {
  return (
    <div className="relative flex-1 flex flex-col gap-2 border border-gray-100 rounded-xl p-3">
      <button onClick={onToggleLike} className="absolute top-3 right-3 z-10">
        <Heart
          size={16}
          className={isLiked ? "fill-pink-500 text-pink-500" : "text-gray-300"}
        />
      </button>
      <div className="w-full h-20 rounded-lg bg-pink-50 overflow-hidden">
        {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="text-sm font-medium">{name}</div>
      <CategoryBadge category={category} className={categoryClassName} />
      <div className="text-sm font-semibold">{formattedPrice}</div>
    </div>
  )
}

export default PopularProductCard
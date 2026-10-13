type ProductCardProps = {
  name: string
  category: string
  price: number
}

const SkincareProductCard = ({
  name,
  category,
  price,
}: ProductCardProps) => {
  const formattedPrice = `Rp ${price.toLocaleString("id-ID")}`

  return (
    <div className="flex flex-1 flex-col gap-3 rounded-2xl bg-white p-4">
      {/* Product Image */}
      <div className="flex h-36 items-center justify-center rounded-xl bg-pink-50">
        <div className="text-sm text-gray-400">Product Image</div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <div className="text-xs text-pink-500">
          {category}
        </div>

        <div className="text-sm font-semibold">
          {name}
        </div>

        <div className="text-sm font-medium text-gray-600">
          {formattedPrice}
        </div>
      </div>
    </div>
  )
}

export default SkincareProductCard
import { Sparkles } from "lucide-react"
import ProductCard from "./SkincareProductCard"
import { skincareProducts } from "../../features/skincare/data"

const ProductSection = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles
            size={21}
            className="text-pink-500"
          />

          <h2 className="text-lg font-semibold">
            Produk Skincare
          </h2>
        </div>

        <button className="text-sm font-medium text-pink-500 transition hover:text-pink-600">
          Lihat Semua →
        </button>
      </div>

      {/* Products */}
      <div className="flex w-full gap-4">
        {skincareProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
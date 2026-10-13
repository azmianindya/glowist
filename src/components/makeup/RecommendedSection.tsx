import { Star } from "lucide-react"
import MakeupSectionHeader from "./MakeupSectionHeader"
import MakeupProductCard from "./MakeupProductCard"
import { recommendedProducts } from "../../features/makeup/data"

const RecommendedSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <MakeupSectionHeader
        title="Rekomendasi Produk"
        icon={
          <Star
            size={22}
            className="text-pink-500"
          />
        }
      />

      <div className="flex w-full gap-4">
        {recommendedProducts.map((product) => (
          <MakeupProductCard
            key={product.name}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  )
}

export default RecommendedSection
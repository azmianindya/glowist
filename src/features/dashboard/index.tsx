import { useState } from "react"
import { SprayCan, Palette, Sparkles, Heart } from "lucide-react"
import { user, statCards, recentlyAdded, popularProducts, categoryColor } from "./data"
import DashboardHeader from "../../components/dashboard/DashboardHeader"
import StatCard from "../../components/dashboard/StatCard"
import SectionHeader from "../../components/dashboard/SectionHeader"
import RecentlyAddedItem from "../../components/dashboard/RecentlyAddedItem"
import PopularProductCard from "../../components/dashboard/PopularProductCard"
import PromoBanner from "../../components/dashboard/PromoBanner"

const iconMap = {
  SprayCan,
  Palette,
  Sparkles,
  Heart,
}

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`

const Dashboard = () => {
  const [liked, setLiked] = useState<string[]>([])

  const toggleLike = (name: string) => {
    setLiked((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    )
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFF5F5] gap-6 p-5">
        <DashboardHeader
         userName={user.name}
         subtitle="Explore your beauty collection today."
        />

      {/* Stat Cards */}
      <div className="flex flex-row items-center justify-center gap-4">
        {statCards.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            caption={card.caption}
            icon={iconMap[card.icon]}
          />
        ))}
      </div>

      {/* Recently Added + Beauty Collection */}
      <div className="flex flex-row gap-4">
        <div className="flex-1 bg-white rounded-xl p-5">
          <SectionHeader title="Recently Added" />
          {recentlyAdded.map((item) => (
            <RecentlyAddedItem
              key={item.name}
              name={item.name}
              category={item.category}
              categoryClassName={categoryColor[item.category]}
              formattedPrice={formatRupiah(item.price)}
              image={item.image}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <PromoBanner
            label="Your Beauty Collection"
            title="Small steps, great results"
            buttonLabel="Explore Now"
          />

          <div className="bg-white rounded-xl p-5">
            <SectionHeader title="Popular Products" />
            <div className="flex flex-row gap-3">
              {popularProducts.map((item) => (
                <PopularProductCard
                  key={item.name}
                  name={item.name}
                  category={item.category}
                  categoryClassName={categoryColor[item.category]}
                  formattedPrice={formatRupiah(item.price)}
                  image={item.image}
                  isLiked={liked.includes(item.name)}
                  onToggleLike={() => toggleLike(item.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
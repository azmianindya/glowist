import { useState } from "react"
import SearchBar from "../../components/skincare/SearchBar"
import MakeupHero from "../../components/makeup/MakeupHero"
import CategoryTabs from "../../components/makeup/CategoryTabs"
import RecommendedSection from "../../components/makeup/RecommendedSection"
import MakeupCategorySection from "../../components/makeup/MakeupCategorySection"
import MakeupTipSection from "../../components/makeup/MakeupTipSection"
import MakeupPromo from "../../components/makeup/MakeupPromo"

import {
  makeupHero,
  makeupCategories,
  makeupPromo,
} from "./data"

const Makeup = () => {
  const [activeCategory, setActiveCategory] =
    useState("Semua")

  return (
    <div className="flex min-h-screen w-full flex-col gap-5 bg-[#FFF5F5] p-5">
      {/* Header */}
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold">
            Makeup
          </div>

          <div className="text-gray-600">
            Temukan produk makeup yang cocok untukmu.
          </div>
        </div>

        <SearchBar />
      </div>

      {/* Hero */}
      <MakeupHero
        title={makeupHero.title}
        description={makeupHero.description}
        buttonLabel={makeupHero.buttonLabel}
      />

      {/* Category Tabs */}
      <CategoryTabs
        categories={makeupCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Recommended Products */}
      <RecommendedSection />

      {/* Bottom Sections */}
      <div className="flex w-full gap-4">
        <MakeupCategorySection />

        <MakeupTipSection />

        <MakeupPromo
          title={makeupPromo.title}
          description={makeupPromo.description}
          buttonLabel={makeupPromo.buttonLabel}
        />
      </div>
    </div>
  )
}

export default Makeup
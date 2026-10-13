import SearchBar from "../../components/skincare/SearchBar"
import SkincareHero from "../../components/skincare/SkincareHero"
import RoutineSection from "../../components/skincare/RoutineSection"
import ProductSection from "../../components/skincare/ProductSection"
import SkinTip from "../../components/skincare/SkinTips"
import {
  skincareHero,
  skinTip,
} from "./data"

const Skincare = () => {
  return (
    <div className="flex min-h-screen w-full flex-col gap-6 bg-[#FFF5F5] p-5">
      {/* Header */}
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-semibold">
            Skincare
          </div>

          <div className="text-gray-600">
            Kelola rutinitas dan produk skincare kamu.
          </div>
        </div>

        <SearchBar />
      </div>

      {/* Hero */}
      <SkincareHero
        title={skincareHero.title}
        description={skincareHero.description}
        buttonLabel={skincareHero.buttonLabel}
      />

      {/* Routine */}
      <RoutineSection />

      {/* Products */}
      <ProductSection />

      {/* Tips */}
      <SkinTip
        title={skinTip.title}
        description={skinTip.description}
      />
    </div>
  )
}

export default Skincare
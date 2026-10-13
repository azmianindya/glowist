import { ShoppingBag } from "lucide-react"

import MakeupSectionHeader from "./MakeupSectionHeader"
import { makeupCategoryCards } from "../../features/makeup/data"

const MakeupCategorySection = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-4">
      <MakeupSectionHeader
        title="Kategori Pilihan"
        icon={
          <ShoppingBag
            size={21}
            className="text-pink-500"
          />
        }
      />

      <div className="grid grid-cols-3 gap-3">
        {makeupCategoryCards.map((category) => (
          <button
            key={category.name}
            className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-pink-100 bg-pink-50 transition hover:bg-pink-100"
          >
            <div className="text-xs text-gray-400">
              {category.image}
            </div>

            <div className="flex w-full items-center justify-between px-3">
              <span className="text-[10px] font-medium text-pink-700">
                {category.name}
              </span>

              <span className="text-pink-500">
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default MakeupCategorySection
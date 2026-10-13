type CategoryTabsProps = {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) => {
  return (
    <div className="flex w-full items-center gap-3 overflow-x-auto">
      {categories.map((category) => {
        const isActive = category === activeCategory

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`shrink-0 rounded-full border px-5 py-2 text-xs font-medium transition ${
              isActive
                ? "border-pink-500 bg-pink-500 text-white"
                : "border-pink-100 bg-white text-pink-700 hover:bg-pink-50"
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryTabs
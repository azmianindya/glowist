type CategoryBadgeProps = {
  category: string
  className?: string
}

const CategoryBadge = ({ category, className = "" }: CategoryBadgeProps) => {
  return (
    <span className={`w-fit text-xs px-2 py-0.5 rounded-full ${className}`}>
      {category}
    </span>
  )
}

export default CategoryBadge
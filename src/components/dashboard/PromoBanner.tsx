import { ArrowRight } from "lucide-react"

type PromoBannerProps = {
  label: string
  title: string
  buttonLabel: string
  onButtonClick?: () => void
}

const PromoBanner = ({ label, title, buttonLabel, onButtonClick }: PromoBannerProps) => {
  return (
    <div className="relative flex flex-col justify-center gap-3 bg-pink-100 rounded-xl p-6 h-44 overflow-hidden">
      <div className="text-sm text-pink-500 font-medium">{label}</div>
      <div className="text-2xl font-bold text-pink-700 leading-snug max-w-[65%]">{title}</div>
      <button
        onClick={onButtonClick}
        className="w-fit flex items-center gap-2 bg-pink-500 text-white text-sm px-4 py-2 rounded-full hover:bg-pink-600 transition"
      >
        {buttonLabel} <ArrowRight size={14} />
      </button>
    </div>
  )
}

export default PromoBanner
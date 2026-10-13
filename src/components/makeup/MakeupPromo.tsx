import { Heart, Sparkles } from "lucide-react"

type MakeupPromoProps = {
  title: string
  description: string
  buttonLabel: string
}

const MakeupPromo = ({
  title,
  description,
  buttonLabel,
}: MakeupPromoProps) => {
  return (
    <section className="relative flex min-h-64 flex-1 overflow-hidden rounded-2xl bg-pink-100 p-6">
      {/* Content */}
      <div className="relative z-10 flex max-w-60 flex-col gap-3">
        <Sparkles
          size={22}
          className="text-pink-500"
        />

        <div className="text-lg font-bold text-pink-700">
          {title}
        </div>

        <div className="text-xs leading-relaxed text-gray-500">
          {description}
        </div>

        <button className="flex w-fit items-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-pink-600">
          {buttonLabel}
          <span>→</span>
        </button>
      </div>

      {/* Decoration */}
      <div className="absolute right-5 bottom-5 flex items-end gap-2">
        <div className="h-24 w-10 rounded-t-xl border-2 border-pink-400 bg-white" />

        <div className="h-32 w-12 rounded-t-xl border-2 border-pink-400 bg-pink-300" />

        <div className="h-20 w-9 rounded-t-xl border-2 border-pink-400 bg-white" />
      </div>

      <Heart
        size={32}
        className="absolute right-7 top-10 rotate-12 text-pink-300"
      />
    </section>
  )
}

export default MakeupPromo
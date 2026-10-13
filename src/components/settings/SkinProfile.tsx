import { User, ChevronRight, FaceNeutral, Sparkles, Leaf, Target } from "lucide-react"

const SkinProfile = () => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center">
                <User className="text-pink-700" />
            </div>

            <div>
                <div className="font-semibold text-lg text-pink-700">1. Profil Kulit & Kecantikan</div>
                <div className="text-xs text-gray-500">Atur preferensi kulit, tone, dan bahan yang kamu inginkan.</div>
            </div>
        </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-12 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <FaceNeutral className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Jenis & Masalah Kulit</div>
            <div className="text-xs text-gray-500">Kulit kombinasi - Jerawat, Hiperpigmentasi</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 2 */}
        <div className="h-12 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Sparkles className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Tone & Undertone</div>
            <div className="text-xs text-gray-500">Light - Neutral (N)</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 3 */}
        <div className="h-12 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Leaf className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Alergi & Bahan yang Diinginkan</div>
            <div className="text-xs text-gray-500">Fragrance-free, Paraben-free - Niacinamide, Retinol</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 4 */}
        <div className="h-12 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Target className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Target Personalisasi</div>
            <div className="text-xs text-gray-500">Glass Skin, Acne-Care, Natural makeup look </div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>
      </div>
    </div>
  )
}

export default SkinProfile
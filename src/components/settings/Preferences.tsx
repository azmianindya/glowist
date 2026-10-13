import { Button } from "@heroui/react"
import { Sparkles, WandSparkles, Camera, ChevronRight } from "lucide-react"

const Preferences = () => {
  const brands = ["Cruelty-Free", "Vegan", "Halal", "Budget"]
  
  return (
    <div className="h-full rounded-2xl bg-pink-100 p-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
          <Sparkles className="text-pink-700" />
        </div>

        <div>
          <div className="font-semibold text-lg text-pink-700">3. Preferensi Konten & Rekomendasi</div>
          <div className="text-xs text-gray-500">Sesuaikan rekomendasi sesuai preferensimu.</div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-24 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <WandSparkles className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-semibold text-xs text-pink-700">Brand Favorit / Diinginkan</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {brands.map((brand) => (
                  <Button
                    key={brand}
                    size="sm"
                    className="min-w-0 w-fit! flex-none! rounded-full bg-pink-50 px-4 text-xs text-pink-600"
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 2 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Camera className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Fitur AR / Virtual Try-On</div>
            <div className="text-xs text-gray-500">Akses kamera & pencahayaan</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>
      </div>
    </div>
  )
}

export default Preferences
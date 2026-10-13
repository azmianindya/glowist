import { CalendarHeart, Sun, SprayCan, Touchpad } from "lucide-react"
import { Button, Switch, Toast } from "@heroui/react"

const RoutineReminder = () => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center">
          <CalendarHeart className="text-pink-700" />
        </div>

        <div>
          <div className="font-semibold text-lg text-pink-700">2. Rutinitas & Pengingat</div>
          <div className="text-xs text-gray-500">Jaga konsistensi rutinitasmu dengan pengingat.</div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Sun className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Pengingat Skincare</div>
            <div className="text-xs text-gray-500">Pagi (AM) & Malam (PM)</div>
          </div>

          <Switch className="ml-auto">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch>
        </div>

        {/* 2 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <SprayCan className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Re-apply Sunscreen</div>
            <div className="text-xs text-gray-500">Setiap 2-3 jam</div>
          </div>

          <Switch className="ml-auto">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch>
        </div>

        {/* 3 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Touchpad className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Tracking PAO</div>
            <div className="text-xs text-gray-500">Ingatkan tanggal kadaluarsa produk</div>
          </div>

          <Switch className="ml-auto">
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch>
        </div>

      </div>    
    </div>
  )
}

export default RoutineReminder
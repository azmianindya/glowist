import { Bell, Sun } from "lucide-react"

const ReapplyCard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
            <Sun size={19} className="text-pink-500" />
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-semibold">Re-apply</div>
            <div className="text-sm font-semibold text-pink-500">Sunscreen</div>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex h-6 w-11 items-center rounded-full bg-pink-400 p-1">
          <div className="ml-auto h-4 w-4 rounded-full bg-white" />
        </div>
      </div>

      {/* Reminder */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Bell size={15} className="text-pink-400" />
        <span>Pengingat aktif</span>
      </div>

      {/* Description */}
      <div className="rounded-xl bg-pink-50 p-3">
        <div className="text-xs leading-relaxed text-gray-500">
          Jangan lupa re-apply sunscreen
          setiap 2–3 jam untuk menjaga
          perlindungan kulit.
        </div>
      </div>

      <button className="mt-auto w-full rounded-full bg-pink-100 py-2 text-xs font-medium text-pink-600 transition hover:bg-pink-200">Atur Pengingat</button>
    </div>
  )
}

export default ReapplyCard
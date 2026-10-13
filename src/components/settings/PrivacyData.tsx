import { LockKeyhole, ShieldCheck, ChevronRight, Eye, Database } from "lucide-react"

const PrivacyData = () => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center">
                <LockKeyhole className="text-pink-700" />
            </div>

            <div>
                <div className="font-semibold text-lg text-pink-700">6. Privasi & Data</div>
                <div className="text-xs text-gray-500">Atur izin & kelola data pribadimu.</div>
            </div>
        </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <ShieldCheck className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Akses Izin</div>
            <div className="text-xs text-gray-500">Kamera, lokasi, galeri</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 2 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Eye className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Privasi Profil</div>
            <div className="text-xs text-gray-500">Visibilitas Ulasan & Postingan</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 3 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Database className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Kelola Data</div>
            <div className="text-xs text-gray-500">Unduh data pribadi / Hapus akun</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

      </div>
    </div>
  )
}

export default PrivacyData
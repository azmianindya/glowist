import { ShieldCheck, ChevronRight, UserRound, LockKeyhole, CreditCard } from "lucide-react"

const AccountSecurity = () => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center">
                <ShieldCheck className="text-pink-700" />
            </div>

            <div>
                <div className="font-semibold text-lg text-pink-700">4. Akun & Keamanan</div>
                <div className="text-xs text-gray-500">Kelola data diri & keamanan akunmu.</div>
            </div>
        </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <UserRound className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Data Diri</div>
            <div className="text-xs text-gray-500">Nama, email, nomor HP. foto profil</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 2 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <LockKeyhole className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Keamanan</div>
            <div className="text-xs text-gray-500">Ubah Password, 2FA, sosial media</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

        {/* 3 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <CreditCard className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Alamat & Pembayaran</div>
            <div className="text-xs text-gray-500">Alamat pengiriman, metode pembayaran</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />
        </div>

      </div>
    </div>
  )
}

export default AccountSecurity
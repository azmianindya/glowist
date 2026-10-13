import { Bell, Vibrate, Mails, MessagesCircle } from "lucide-react"
import { Switch } from "@heroui/react"

const Notifications = () => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center">
          <Bell className="text-pink-700" />
        </div>

        <div>
          <div className="font-semibold text-lg text-pink-700">5. Notifikasi</div>
          <div className="text-xs text-gray-500">Pilih notifikasi yang ingin kamu terima.</div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {/* 1 */}
        <div className="h-18 rounded-xl flex items-center gap-3 bg-pink-200 px-4">
          <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center">
            <Vibrate className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Push Notification</div>
            <div className="text-xs text-gray-500">Promo, rutinitas, artikel, pesanan</div>
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
            <Mails className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">Email</div>
            <div className="text-xs text-gray-500">Buletin tren kecantikan mingguan</div>
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
            <MessagesCircle className="text-pink-700" size={18} />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold text-xs text-pink-700">SMS</div>
            <div className="text-xs text-gray-500">Penawaran eksklusif</div>
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

export default Notifications
import { Headset, Languages, CircleHelp, Sun, Moon, ChevronRight } from "lucide-react"
import { Label, ListBox, Select } from "@heroui/react"

type ContactSupportProps = {
  isDark: boolean
  onThemeChange: (isDark: boolean) => void
  language: string
  onLanguageChange: (language: string) => void
}

const ContactSupport = ({
  isDark,
  onThemeChange,
  language,
  onLanguageChange,
}: ContactSupportProps) => {
  return (
    <div className="rounded-2xl bg-pink-100 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-300">
          <Headset className="text-pink-700" />
        </div>

        <div className="flex flex-col">
          <div className="text-lg font-semibold text-pink-700">7. Aplikasi & Bantuan</div>
          <div className="text-xs text-gray-500">Atur tampilan aplikasi dan dapatkan bantuan kapan saja.</div>
        </div>
      </div>

      <div className="mt-5 flex flex-row gap-3">
        {/* 1 */}
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-pink-200 px-4 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-300">
            <Sun className="text-pink-700" size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-pink-700">Tampilan</div>
            <div className="text-xs text-gray-500">Dark/Light Mode</div>
          </div>

          <div className="flex shrink-0 rounded-lg bg-pink-100 p-1">
            <button
              type="button"
              onClick={() => onThemeChange(false)}
              className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                !isDark
                  ? "bg-pink-300 text-pink-700"
                  : "text-gray-500 hover:text-pink-700"
              }`}
            >
              <Sun size={14} />Light
            </button>

            <button
              type="button"
              onClick={() => onThemeChange(true)}
              className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                isDark
                  ? "bg-pink-300 text-pink-700"
                  : "text-gray-500 hover:text-pink-700"
              }`}
            >
              <Moon size={14} />Dark
            </button>
          </div>
        </div>

        {/* 2 */}
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-pink-200 px-4 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-300">
            <Languages className="text-pink-700" size={18} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="text-xs font-semibold text-pink-700">Bahasa</div>
            <Select
              className="w-full"
              selectedKey={language}
              onSelectionChange={(key) =>
                onLanguageChange(key as string)
              }
            >
              <Label className="sr-only">Bahasa</Label>
              <Select.Trigger className="h-8 min-h-0 w-full rounded-lg border-0 bg-pink-50 px-3 text-xs text-gray-500">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="id" textValue="Indonesia">Indonesia
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="en" textValue="English">English
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>

        {/* 3 */}
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-pink-200 px-4 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-300">
            <CircleHelp className="text-pink-700" size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-pink-700">Pusat Bantuan</div>
            <div className="truncate text-xs text-gray-500">FAQ, Customer Service/Live Chat, Syarat & Ketentuan</div>
          </div>

          <ChevronRight className="ml-auto text-pink-700" size={20} />  
        </div>
      </div>
    </div>
  )
}

export default ContactSupport
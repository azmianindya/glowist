import { useState } from "react"
import SkinProfile from "../../components/settings/SkinProfile"
import RoutineReminder from "../../components/settings/RoutineReminder"
import Preferences from "../../components/settings/Preferences"
import AccountSecurity from "../../components/settings/AccountSecurity"
import Notifications from "../../components/settings/Notifications"
import PrivacyData from "../../components/settings/PrivacyData"
import ContactSupport from "../../components/settings/ContactSupport"

const Settings = () => {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState("id")

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Settings</div>
        <div className="text-gray-600">Kelola pengaturan akun dan preferensi kamu.</div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <SkinProfile />
        <RoutineReminder />
        <Preferences />
        <AccountSecurity />
        <Notifications />
        <PrivacyData />
      </div>

      <ContactSupport
        isDark={isDark}
        onThemeChange={setIsDark}
        language={language}
        onLanguageChange={setLanguage}
      />
    </div>
  )
}

export default Settings
import SidebarButton from "./SidebarButton"
import { LayoutDashboard, Sparkles, WandSparkles, Settings } from "lucide-react"

const Sidebar = () => {
  return (
    <div className=" w-48 h-screen overflow-hidden bg-pink-200">
      <div className="z-10 flex flex-col h-full px-4 py-7">
        <div className="mb-8 w-full text-center">
          <div className="text-shadow-drop-center font-bebas text-3xl font-semibold tracking-[0.12em]">GLOWIST</div>
        </div>

        <div className="flex flex-col gap-2">
          <SidebarButton
            icon={<LayoutDashboard size={19} />}
            teks="Dashboard"
            url="/dashboard"
          />
          <SidebarButton
            icon={<Sparkles size={19} />}
            teks="Skincare"
            url="/skincare"
          />
          <SidebarButton
            icon={<WandSparkles size={19} />}
            teks="Makeup"
            url="/makeup"
          />
          <SidebarButton
            icon={<Settings size={19} />}
            teks="Settings"
            url="/settings"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
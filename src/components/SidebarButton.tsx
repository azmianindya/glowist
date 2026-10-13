import type { ReactNode } from "react"
import { Card } from "@heroui/react"
import { Link, useLocation } from "@tanstack/react-router"

type SidebarButtonProps = {
  icon: ReactNode
  teks: string
  url: string
}

const SidebarButton = ({ icon, teks, url }: SidebarButtonProps) => {

  const { pathname } = useLocation();
  const isOn = url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <Link to={url}>
    <Card
      className={`w-full h-11 rounded-2xl shadow-none border-none p-3 cursor-pointer ${
        isOn
          ? "bg-white text-black"
          : "bg-transparent text-[#554B4D]"
      }`}
    >
      <Card.Content className="flex flex-row items-center gap-3 p-0">
        {icon}

        <div className="text-xs font-medium">
          {teks}
        </div>
      </Card.Content>
    </Card>
    </Link>
  )
}

export default SidebarButton
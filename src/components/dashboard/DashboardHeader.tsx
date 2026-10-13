import { Bell } from "lucide-react"
import { Label, SearchField } from "@heroui/react"

type DashboardHeaderProps = {
  userName: string
  subtitle: string
  searchPlaceholder?: string
}

const DashboardHeader = ({
  userName,
  subtitle,
  searchPlaceholder = "Search...",
}: DashboardHeaderProps) => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold">Welcome, {userName}!</div>
        <div className="text-gray-600">{subtitle}</div>
      </div>

      <div className="flex flex-row gap-3">
        <SearchField name="search">
          <Label className="sr-only">Search</Label>
          <SearchField.Group className="flex items-center h-9 gap-2 bg-pink-300 rounded-xl px-3">
            <SearchField.SearchIcon />
            <SearchField.Input className="w-70" placeholder={searchPlaceholder} />
          </SearchField.Group>
        </SearchField>

        <div className="flex w-9 h-9 bg-pink-300 items-center justify-center rounded-full">
          <Bell size={18} />
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
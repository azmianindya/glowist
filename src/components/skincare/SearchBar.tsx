import { Label, SearchField } from "@heroui/react"

type SearchBarProps = {
  searchPlaceholder?: string
}

const SearchBar = ({
  searchPlaceholder = "Search...",
}: SearchBarProps) => {
  return (
    <SearchField name="search">
      <Label className="sr-only">Search</Label>

      <SearchField.Group className="flex h-9 items-center gap-2 rounded-xl bg-pink-300 px-3">
        <SearchField.SearchIcon />

        <SearchField.Input
          className="w-70"
          placeholder={searchPlaceholder}
        />
      </SearchField.Group>
    </SearchField>
  )
}

export default SearchBar
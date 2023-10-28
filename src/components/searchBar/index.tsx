import { Search } from "@mui/icons-material"

function SearchBar() {
  return (
    <div className="flex flex-row w-full items-center gap-3">
      <Search className="w-1/6" />
      <input className="w-5/6 bg-[#f5f5f5] rounded-full p-1" />
    </div>
  )
}

export { SearchBar }
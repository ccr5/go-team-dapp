import { SearchBar } from "../searchBar"
import { ComboBox } from "./comboBox"

function Filters() {
  return (
    <div className="flex flex-row rounded-full max-w-[800px] pt-2 pb-2 pl-5 pr-5 justify-between items-center bg-white gap-4">
      <SearchBar />
      <ComboBox />
    </div>
  )
}

export { Filters }
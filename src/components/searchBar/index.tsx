import { Wallet } from "@mui/icons-material"

function SearchBar() {
  return (
    <div className="flex flex-row w-full items-center gap-3">
      <Wallet className="w-1/6" />
      <select className="w-5/6 bg-[#f5f5f5] rounded-full p-1">
        <option className="" value={"team"}>Team wallet</option>
      </select>
    </div>
  )
}

export { SearchBar }
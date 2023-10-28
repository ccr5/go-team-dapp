import { ExpandMore, Search } from "@mui/icons-material"

function ComboBox() {
  return (
    <div className="flex flex-row w-36 justify-between items-center gap-3 bg-white">
      <div>{"All types"}</div>
      <ExpandMore />
    </div>
  )
}

export { ComboBox }
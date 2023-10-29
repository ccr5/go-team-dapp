import { useState } from "react"

function ComboBox() {
  const [assetsType, setAssetsType] = useState<{types: string[]}>({
    types: ["All types", "milestones", "jobs"]
  })

  return (
    <div className="flex flex-row w-36 justify-between items-center gap-3 bg-white">
      <select className="p-1 bg-white">
        {
          assetsType && assetsType.types.map((value) => {
            return ( 
              <option key={value} className="w-full text-center" value={value}>
                {value}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export { ComboBox }
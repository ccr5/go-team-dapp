import { WalletsContext } from "@/context/wallets/walletsContext"
import { reduceAddress } from "@/utils/wallets"
import { Wallet } from "@mui/icons-material"
import { useContext } from "react"

function SearchBar() {
  const wallets = useContext(WalletsContext)

  return (
    <div className="flex flex-row w-full items-center gap-3">
      <Wallet className="w-1/6" />
      <select className="w-5/6 bg-[#f5f5f5] rounded-full p-1">
        <option key={process.env.TEAM_WALLET} className="w-full text-center" value={process.env.TEAM_WALLET}>
          {reduceAddress(process.env.TEAM_WALLET || "")}
        </option>
        {
          wallets.wallets && wallets.wallets.participants.map((address) => {
            return ( 
              <option key={address} className="w-full text-center" value={address}>
                {reduceAddress(address)}
              </option> )
          })
        }
      </select>
    </div>
  )
}

export { SearchBar }
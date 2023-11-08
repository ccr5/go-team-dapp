import { TeamWalletContext } from "@/context/teamWallet/teamWalletContext"
import { WalletsContext } from "@/context/wallets/walletsContext"
import { reduceAddress } from "@/utils/wallets"
import { Wallet } from "@mui/icons-material"
import { useContext } from "react"

function SearchBar() {
  const wallets = useContext(WalletsContext)
  const teamWallet = useContext(TeamWalletContext)

  function updateTeamWallet(e: any) {
    e.preventDefault()
    if (e.target.value) {
      teamWallet.handleTeamWalletContext(e.target.value as `0x${string}`)
    }
  }

  return wallets.wallets && (
    <div className="flex flex-row w-full items-center gap-3">
      <Wallet className="w-1/6" />
      <select className="w-5/6 bg-[#f5f5f5] rounded-full p-1" onClick={(e) => { updateTeamWallet(e) }} >
        <option key={wallets.wallets.team} className="w-full text-center" value={wallets.wallets.team}>
          {reduceAddress(wallets.wallets.team)}
        </option>
        {
          wallets.wallets.participants.map((address) => {
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
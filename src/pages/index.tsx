import { AssetViewer } from '@/components/assetViewer'
import { Header } from '@/components/header'
import { TeamAsset } from '@/components/teamAsset'
import { TeamWalletContext } from '@/context/teamWallet/teamWalletContext'
import { Wallets } from '@/context/wallets/iWalletsContext'
import { WalletsContext } from '@/context/wallets/walletsContext'
import { useContext, useEffect } from 'react'
import { useAccount } from 'wagmi'

export default function Home() {
  const account = useAccount()
  const wallets = useContext(WalletsContext)
  const teamWallet = useContext(TeamWalletContext)

  useEffect(() => {
    if (!wallets.wallets) {
      fetch(`${process.env.NEXT_PUBLIC_GO_TEAM_API}/wallets`, {cache: 'force-cache'})
        .then(async (res) => {
          const value = await res.json() as Wallets
          wallets.handleWalletsContext(value)
          teamWallet.handleTeamWalletContext(value.team)
        })
    }
  })

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9] gap-4 p-5 ">
      <Header />
      {
        wallets.wallets && 
        account.address && 
        wallets.wallets.team == account.address || 
        wallets.wallets && wallets.wallets.participants.filter((adr) => {return adr == account.address}).length > 0 ?
          (
            <>
              <div className='flex flex-row w-full h-full items-center justify-center gap-5 mt-5'>
                <TeamAsset 
                  address={teamWallet.teamWallet || ""}
                  title='Team Assets'
                />
                {/* <TeamAsset 
                  address={account.address || ""}
                  title='My Assets'
                /> */}
              </div>
              <div className='flex flex-row w-full h-full items-center justify-center gap-5'>
                <AssetViewer />
              </div>
            </>
          ) :
          <div className='flex w-full h-[calc(100vh-80px)] text-center justify-center items-center'>Carteira não autorizada</div>
      }
    </main>
  )
}

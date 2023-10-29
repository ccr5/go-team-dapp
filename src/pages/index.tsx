import { Header } from '@/components/header'
import { TeamAsset } from '@/components/teamAsset'
import { Wallets } from '@/context/wallets/iWalletsContext'
import { WalletsContext } from '@/context/wallets/walletsContext'
import { useContext, useEffect } from 'react'
import { useAccount } from 'wagmi'

export default function Home() {
  const account = useAccount()
  const wallets = useContext(WalletsContext)

  useEffect(() => {
    if (!wallets.wallets) {
      fetch(`${process.env.NEXT_BUCKET_URL}/wallets.json`)
        .then(async (res) => {
          const value = await res.json() as Wallets
          wallets.handleWalletsContext(value)
        })
    }
  })

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 p-5 mt-5'>
        <TeamAsset 
          address={wallets.wallets && wallets.wallets.team || ""}
          title='Team Assets'
        />
        <TeamAsset 
          address={account.address || ""}
          title='My Assets'
        />
      </div>
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 p-5 mt-5'>
        Click some asset to see details
      </div>
    </main>
  )
}

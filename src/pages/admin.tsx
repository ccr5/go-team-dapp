import { AssetViewer } from '@/components/assetViewer'
import { Header } from '@/components/header'
import { MintAsset } from '@/components/mintAsset'
import { Wallets } from '@/context/wallets/iWalletsContext'
import { WalletsContext } from '@/context/wallets/walletsContext'
import { useContext, useEffect } from 'react'
import { useAccount } from 'wagmi'

export default function Home() {
  const account = useAccount()
  const wallets = useContext(WalletsContext)

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9] gap-4 p-5 ">
      <Header />
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 mt-5'>
        <MintAsset />
      </div>
      <div className='flex flex-row w-full h-full items-center justify-center gap-5'>
        <AssetViewer />
      </div>
    </main>
  )
}

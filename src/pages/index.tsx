import { Header } from '@/components/header'
import { TeamAsset } from '@/components/teamAsset'
import { useEffect } from 'react'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 p-5 mt-5'>
        <TeamAsset />
        <TeamAsset />
      </div>
    </main>
  )
}

import { Filters } from '@/components/filters'
import { Header } from '@/components/header'
import { PlayerAsset } from '@/components/playerAsset'
import { TeamAsset } from '@/components/teamAsset'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className='flex flex-col w-full h-full items-center justify-center gap-5 p-5'>
        <TeamAsset />
        <br />
        <hr />
        <div className='grid grid-cols-3 w-full gap-3'>
          <PlayerAsset />
          <PlayerAsset />
          <PlayerAsset />
          <PlayerAsset />
          <PlayerAsset />
          <PlayerAsset />
        </div>
      </div>
    </main>
  )
}

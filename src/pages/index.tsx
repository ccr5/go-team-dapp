import { Filters } from '@/components/filters'
import { Header } from '@/components/header'
import { TeamAsset } from '@/components/teamAsset'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className='flex flex-col w-full h-full items-center justify-center gap-4 p-10'>
        <TeamAsset />
      </div>
    </main>
  )
}

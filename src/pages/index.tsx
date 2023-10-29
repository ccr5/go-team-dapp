import { Header } from '@/components/header'
import { TeamAsset } from '@/components/teamAsset'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#D9D9D9]">
      <Header />
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 p-5 mt-5'>
        <TeamAsset title='Team Assets' milestones={100} jobs={100} rewards={100}/>
        <TeamAsset title='My Assets' milestones={100} jobs={100} rewards={100}/>
      </div>
      <div className='flex flex-row w-full h-full items-center justify-center gap-5 p-5 mt-5'>
        Click some asset to see details
      </div>
    </main>
  )
}

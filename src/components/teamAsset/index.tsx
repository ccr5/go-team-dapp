import { AssetsInfo } from "../assetsInfo"
import { AssetBoard } from "../assetBoard"
import { useEffect, useState } from "react"
import { WalletAssetsInfos, loadAddressAssets } from "@/utils/goTeam"
import { useNetwork } from "wagmi"

interface TeamAssetProps {
  title: string,
  address: string
}

function TeamAsset(props: TeamAssetProps) {
  const network = useNetwork()
  const [walletsAssets, setWalletsAssets] = useState<WalletAssetsInfos[] | null>(null)
  const [milestone, setMilestone] = useState<number | null>(null)
  const [job, setJob] = useState<number | null>(null)
  const [reward, setReward] = useState<number | null>(null)

  useEffect(() => {
    if (!walletsAssets && network.chain && network.chain.id == 80001) {
      loadAddressAssets(props.address)
        .then((value) => { if (value) setWalletsAssets(value) })
    }
  })

  useEffect(() => {
    if (walletsAssets) {
      const milestones = walletsAssets.filter((value) => {
        return value.assets.type == "milestone"
      })

      const jobs = walletsAssets.filter((value) => {
        return value.assets.type == "job"
      })

      const rewards = walletsAssets[0].balance

      setMilestone(milestones.length)
      setJob(jobs.length)
      setReward(rewards)
    }
  }, [walletsAssets])

  return (
    <div className="flex flex-col w-full max-w-xl p-4 gap-5 items-center bg-white rounded-xl">
      <div className="font-bold w-full text-center">{props.title}</div>
      <div className="flex flex-row w-full gap-4 items-center justify-center">
        <AssetsInfo key={1} type="milestones" amount={milestone || 0} description={true} />
        <AssetsInfo key={2} type="jobs" amount={job || 0} description={true} />
        <AssetsInfo key={3} type="rewards" amount={reward || 0} description={true} />
      </div>
      <AssetBoard assets={walletsAssets || []} />
    </div>
  )
}

export { TeamAsset }
import { AssetsInfo } from "../assetsInfo"
import { AssetBoard } from "../assetBoard"
import { useEffect, useState } from "react"
import { WalletAssetsInfos, loadAddressAssets } from "@/utils/goTeam"
import { useAccount, useNetwork } from "wagmi"
import { reduceAddress } from "@/utils/wallets"
import { TeamAssetSkeleton } from "./teamAssetSkeleton"

interface TeamAssetProps {
  title: string,
  address: string
}

function TeamAsset(props: TeamAssetProps) {
  const account = useAccount()
  const network = useNetwork()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [walletsAssets, setWalletsAssets] = useState<WalletAssetsInfos[] | null>(null)
  const [milestone, setMilestone] = useState<number | null>(null)
  const [job, setJob] = useState<number | null>(null)
  const [reward, setReward] = useState<number | null>(null)

  useEffect(() => {
    if (network.chain && network.chain.id == 80001) {
      setIsLoading(true)
  
      loadAddressAssets(props.address)
        .then((value) => { 
          if (value) setWalletsAssets(value)
          setIsLoading(false)
        })
        .catch((e) => {
          console.log('loadAddressAssets error: ', e)
          setIsLoading(false)
        })
    }
  }, [network.chain, props.address])

  useEffect(() => {
    if (walletsAssets) {
      const milestones = walletsAssets.filter((value) => {
        return value.assets.type == "milestone" && value.balance > 0
      })


      const jobs = walletsAssets.filter((value) => {
        return value.assets.type == "job" && value.balance > 0
      })

      const rewards = walletsAssets[0].balance

      setMilestone(milestones.length)
      setJob(jobs.length)
      setReward(rewards)
    }
  }, [walletsAssets])

  return isLoading ? <TeamAssetSkeleton /> : (
    <div className="flex flex-col w-full max-w-6xl p-4 gap-5 items-center bg-white rounded-xl">
      <div className="flex flex-row gap-2 w-full justify-center text-center">
        <div className="font-bold">{props.title}</div>
        { props.address && <div>({reduceAddress(props.address)})</div> }
      </div>
      <div className="flex flex-row w-full gap-2 items-center justify-center">
        <AssetsInfo key={1} type="milestones" amount={milestone || 0} description={true} />
        <AssetsInfo key={2} type="jobs" amount={job || 0} description={true} />
        <AssetsInfo key={3} type="rewards" amount={reward || 0} description={true} />
      </div>
      <AssetBoard assets={walletsAssets || []} />
    </div>
  )
}

export { TeamAsset }
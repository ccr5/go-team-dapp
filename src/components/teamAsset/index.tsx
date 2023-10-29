import { AssetsInfo } from "../assetsInfo"
import { AssetBoard } from "../assetBoard"

interface TeamAssetProps {
  title: string,
  milestones: number
  jobs: number
  rewards: number
}

function TeamAsset(props: TeamAssetProps) {
  return (
    <div className="flex flex-col w-full max-w-xl p-4 gap-5 items-center bg-white rounded-xl">
      <div className="font-bold w-full text-center">{props.title}</div>
      <div className="flex flex-row w-full gap-4 items-center justify-center">
        <AssetsInfo key={1} type="milestones" amount={props.milestones || 0} description={true} />
        <AssetsInfo key={2} type="jobs" amount={props.jobs || 0} description={true} />
        <AssetsInfo key={3} type="rewards" amount={props.rewards || 0} description={true} />
      </div>
      <AssetBoard />
    </div>
  )
}

export { TeamAsset }
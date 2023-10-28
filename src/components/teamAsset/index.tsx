import { Assets } from "../assets"
import { AssetBoard } from "./assetBoard"

function TeamAsset() {
  return (
    <div className="flex flex-col w-full max-w-xl p-4 gap-5 items-center bg-white rounded-xl">
      <div className="font-bold w-full text-center">Team Assets</div>
      <div className="flex flex-row w-full gap-4 items-center justify-center">
        <Assets key={1} type="milestones" amount={100} description={true} />
        <Assets key={2} type="jobs" amount={100} description={true} />
        <Assets key={3} type="rewards" amount={100} description={true} />
      </div>
      <AssetBoard />
    </div>
  )
}

export { TeamAsset }
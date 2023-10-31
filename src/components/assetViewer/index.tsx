import { useContext } from "react"
import { AssetOnFocusContext } from "@/context/assetOnFocus/assetOnFocusContext"
import { AssetIcon } from "../assetIcon"

function AssetViewer() {
  const asset = useContext(AssetOnFocusContext)

  return !asset.asset ? <div>Select some achievement </div> : (
    <div className="flex flex-row w-full h-full max-w-6xl p-4 gap-5 bg-white rounded-xl">
      <div className="flex w-1/2 h-full justify-center items-center border-solid shadow border-2 p-4 bg-[#d9d9d9] rounded-2xl">
        <AssetIcon 
          key={asset.asset.assets.name}
          type={asset.asset.assets.type}
          name={asset.asset.assets.name}
          assetImageUrl={asset.asset.assets.image}
          width={200}
          height={200}
          animated
        />
      </div>
      <div className="flex flex-col w-1/2 h-full p-4 gap-4">
        <div className="flex flex-col w-full justify-center items-center font-bold text-center text-2xl">
          <div>{asset.asset.assets.id} - {asset.asset.assets.name}</div>
          <div className="italic text-xl">{asset.asset.assets.type}</div>
        </div>
        <div className="flex w-full justify-center items-center text-center">
          {'description' in asset.asset.assets && asset.asset.assets.description}
        </div>
        {'maxLevel' in asset.asset.assets && 
          <table>
            <ul>
              <li>level</li>
              <li>{asset.asset.assets.level}/{asset.asset.assets.maxLevel}</li>
            </ul>
            <ul>
              <li>Required amount</li>
              <li>{asset.asset.assets.amountToComplete}</li>
            </ul>
          </table>
        }
        {'teamTokenReward' in asset.asset.assets && 
          <>
            <div className="flex flex-row gap-4 w-full justify-center items-center text-center">
              <div className="font-bold">Reward:</div>
              {asset.asset.assets.teamTokenReward}
            </div>
          </>
        }
      </div>
    </div>
  )
}

export { AssetViewer }
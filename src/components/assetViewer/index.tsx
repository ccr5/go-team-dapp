import { useEffect, useState } from "react"
import { JobAsset, MilestoneAsset, WalletAssetsInfos, loadAddressAssets } from "@/utils/goTeam"
import { AssetViewerSkeleton } from "./assetViewerSkeleton"
import Image from "next/image"

function AssetViewer() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return isLoading ? <AssetViewerSkeleton /> : (
    <div className="flex flex-row w-full h-full p-4 gap-5 items-center bg-white rounded-xl">
      <div className="flex w-1/2 h-full justify-center items-center">
        {/* <Image 
          alt="" 
          title={props.asset.name} 
          src={props.asset.image}
          width={38} height={38}
          className="rounded-full w-full h-full animate-spin" 
        /> */}
      </div>
    </div>
  )
}

export { AssetViewer }
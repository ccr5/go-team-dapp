import { useState } from "react";
import { AssetsInfo } from "../assetsInfo";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { AssetBoard } from "../assetBoard";

function PlayerAsset() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-row w-min h-min">
      <div className="flex flex-col w-[200px] h-[250px] shrink-0 bg-[#079D95] rounded-2xl p-2 text-white">
        <div className="flex flex-col justify-center items-center w-full h-1/2">
          <div className="flex w-full h-3/4 justify-center items-center">
            UserImage
          </div>
          <div className="flex w-full h-1/4 justify-center items-center font-bold">
            Address
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-1/2">
          <div className="flex flex-col w-full h-2/3 justify-center items-start p-4">
            <AssetsInfo key={1} type="milestones" amount={100} description={true} />
            <AssetsInfo key={2} type="jobs" amount={100} description={true} />
            <AssetsInfo key={3} type="rewards" amount={100} description={true} />
          </div>
          <div className="flex w-full h-1/3 justify-end items-end">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <ArrowCircleLeft className="text-white" /> : <ArrowCircleRight className="text-white" />}
            </button>
          </div>
        </div>
      </div>
      {
        isOpen && 
          <div className="flex flex-col w-[200px] h-[250px] shrink-0 bg-white rounded-2xl p-2">
              <AssetBoard />
          </div>
      }
    </div>
  )
}

export { PlayerAsset }
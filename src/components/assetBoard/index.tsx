import { Fullscreen } from "@mui/icons-material";
import { AssetIcon } from "../assetIcon";
import { WalletAssetsInfos } from "@/utils/goTeam";
import { useContext } from "react";
import { AssetOnFocusContext } from "@/context/assetOnFocus/assetOnFocusContext";

interface AssetBoardProps {
  assets: WalletAssetsInfos[]
}

function AssetBoard(props: AssetBoardProps) {
  const assetOnFocus = useContext(AssetOnFocusContext)

  return (
    <div className="flex flex-row justify-between items-start w-full h-full rounded-2xl bg-[#C4D1D1]">
      <div className="flex flex-wrap w-5/6 h-full min-h-[100px] max-h-[300px] p-2 gap-5 shrink-0">
        {
          props.assets.map((value) => {
            if (value.balance > 0 && value.assets.type != "reward") {
              return (
                <button 
                  key={value.assets.name}
                  className="flex w-10 h-10 justify-center items-center"
                  onClick={() => { assetOnFocus.handleAssetOnFocusContext(value) }}
                >
                  <AssetIcon 
                    key={value.assets.name}
                    type={value.assets.type}
                    name={value.assets.name}
                    currentPercent={'level' in value.assets ? value.assets.level / value.assets.maxlevel : undefined}
                    assetImageUrl={value.assets.image}
                    width={38}
                    height={38}
                  />
                </button>
              )
            }
          })
        }
      </div>
      <div className="flex flex-col w-1/6 p-3 items-center gap-2 self-stretch">
        <Fullscreen />
      </div>
    </div>
  )
}

export { AssetBoard }
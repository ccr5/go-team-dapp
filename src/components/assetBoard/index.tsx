import { Fullscreen } from "@mui/icons-material";
import { AssetIcon } from "../assetIcon";
import { WalletAssetsInfos } from "@/utils/goTeam";

interface AssetBoardProps {
  assets: WalletAssetsInfos[]
}

function AssetBoard(props: AssetBoardProps) {
  return (
    <div className="flex flex-row justify-between items-start w-full h-full rounded-2xl bg-[#C4D1D1]">
      <div className="flex flex-wrap w-5/6 h-full min-h-[100px] max-h-[300px] p-2 gap-5 shrink-0">
        {
          props.assets.map((value) => {
            if (value.balance > 0 && value.assets.type != "reward") {
              return (
                <AssetIcon 
                  key={value.assets.name}
                  type="milestone"
                  assetImageUrl={value.assets.image}
                />
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
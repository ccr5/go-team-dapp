import { Fullscreen } from "@mui/icons-material";
import { AssetIcon } from "../assetIcon";

function AssetBoard() {
  return (
    <div className="flex flex-row justify-between items-start w-full h-full rounded-2xl bg-[#C4D1D1]">
      <div className="flex flex-wrap w-5/6 h-full min-h-[100px] max-h-[300px] p-2 gap-5 shrink-0">
        <AssetIcon type="milestone" assetImageUrl="https://gnfd-testnet-sp2.bnbchain.org/view/my-test-bucket/brook_translator.png"/>
      </div>
      <div className="flex flex-col w-1/6 p-3 items-center gap-2 self-stretch">
        <Fullscreen />
      </div>
    </div>
  )
}

export { AssetBoard }
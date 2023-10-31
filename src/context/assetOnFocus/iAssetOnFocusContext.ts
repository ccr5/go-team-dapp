import { WalletAssetsInfos } from "@/utils/goTeam"

interface IAssetOnFocusContext {
  asset: WalletAssetsInfos | null
  handleAssetOnFocusContext: (asset: WalletAssetsInfos | null) => void
}

export type { IAssetOnFocusContext }
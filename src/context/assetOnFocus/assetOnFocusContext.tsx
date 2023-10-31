import { createContext } from "react"
import { IAssetOnFocusContext } from "./iAssetOnFocusContext"

export const AssetOnFocusContext = createContext<IAssetOnFocusContext>({
  asset: null,
  handleAssetOnFocusContext: () => { }
})
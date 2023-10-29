import { createContext } from "react"
import { IWalletsContext } from "./iWalletsContext"

export const WalletsContext = createContext<IWalletsContext>({
  wallets: null,
  handleWalletsContext: () => { }
})
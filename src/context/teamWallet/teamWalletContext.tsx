import { createContext } from "react"
import { ITeamWalletContext } from "./iTeamWalletContext"

export const TeamWalletContext = createContext<ITeamWalletContext>({
  teamWallet: null,
  handleTeamWalletContext: () => { }
})
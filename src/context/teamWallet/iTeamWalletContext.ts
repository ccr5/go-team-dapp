interface ITeamWalletContext {
  teamWallet: `0x${string}` | null
  handleTeamWalletContext: (value: `0x${string}` | null) => void
}

export type { ITeamWalletContext }
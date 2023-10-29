interface Wallets {
  team: string,
  participants: string[]
}

interface IWalletsContext {
  wallets: Wallets | null
  handleWalletsContext: (value: Wallets | null) => void
}

export type { Wallets, IWalletsContext }
interface Wallets {
  team: `0x${string}`,
  participants: `0x${string}`[]
}

interface IWalletsContext {
  wallets: Wallets | null
  handleWalletsContext: (value: Wallets | null) => void
}

export type { Wallets, IWalletsContext }
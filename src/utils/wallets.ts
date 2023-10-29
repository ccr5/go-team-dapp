function reduceAddress(wallet: string) {
  return `${wallet.substring(0, 6)}...${wallet.substring(36, 42)}`
}

export { reduceAddress }
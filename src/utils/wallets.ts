function reduceAddress(wallet: string) {
  return `${wallet.substring(0, 6)}...${wallet.substring(36, 42)}`
}

function reduceBalance(balance: number) {
  if (balance < 1000) {
    return `${balance}`
  } else if (balance < 1000000) {
    return `${Math.floor(balance / 1000)}K`
  } else if (balance < 1000000000) {
    return `${Math.floor(balance / 1000000)}M`
  } else if (balance < 1000000000000) {
    return `${Math.floor(balance / 1000000000)}B`
  } else {
    return `${balance}`
  }
}

export { reduceAddress, reduceBalance }
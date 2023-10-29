function reduceAddress(wallet: string) {
  return `${wallet.substring(0, 6)}...${wallet.substring(36, 42)}`
}

function reduceBalance(balance: number) {
  if (balance < 1000) {
    return `${balance}`
  } else if (balance < 10000) {
    return `${Math.floor(balance / 1000)}k`
  } else if (balance < 100000) {
    return `${Math.floor(balance / 10000)}m`
  } else if (balance < 1000000) {
    return `${Math.floor(balance / 100000)}M`
  } else if (balance < 10000000) {
    return `${Math.floor(balance / 1000000)}B`
  } else {
    return `${balance}`
  }
}

export { reduceAddress, reduceBalance }
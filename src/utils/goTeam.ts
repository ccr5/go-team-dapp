import { ethers } from "ethers";
import goTeam from "../../contracts/GoTeam.sol/GoTeam.json"

export interface JobAsset {
  id: number
  name: string
  type: string
  description: string
  maxLevel: number
  level: number
  amountToComplete: number
  image: string
  teamTokenReward: number
}

export interface MilestoneAsset {
  id: number
  name: string
  type: string
  description: string
  image: string
  teamTokenReward: number
  data: any
}

export interface TeamTokenAsset {
  id: number
  name: string
  type: string
  symbol: string
  decimals: number
  image: string
}

export interface WalletAssetsInfos {
  assets: JobAsset | MilestoneAsset | TeamTokenAsset
  balance: number
}

async function mintToken(account: string, tokenId: number, amount: number) {
  const provider = new ethers.BrowserProvider((window as any).ethereum)
  const signer = await provider.getSigner()
  const erc1155 = new ethers.Contract(
    process.env.NEXT_PUBLIC_GO_TEAM_ADDRESS || "",
    goTeam.abi,
    signer
  )

  await erc1155.mint(
    account, 
    tokenId, 
    amount, 
    ethers.hashMessage(JSON.stringify({
      account,
      tokenId,
      amount
    })
  ))
    .then(() => console.log("Ok"))
    .catch((e) => console.log("error: ", e))
}

async function loadAddressAssets(wallet: string) {
  let response: WalletAssetsInfos[] = []

  const provider = new ethers.BrowserProvider((window as any).ethereum)
  const signer = await provider.getSigner()
  const erc1155 = new ethers.Contract(
    process.env.NEXT_PUBLIC_GO_TEAM_ADDRESS || "",
    goTeam.abi,
    signer
  )

  let end = false
  let count = 0

  while (!end) {
    const existAsset = await erc1155.exists(count)

    if (existAsset) {
      count++
    } else {
      end = true
    }

  }

  for (let index = 0; index < count; index++) {
    const uri: string = await erc1155.uri(index)
    const assetInfo = await fetch(uri.replace("{id}", index.toString()), {cache: "force-cache"})
    const balance: number = Number(await erc1155.balanceOf(wallet, index))
    response.push({assets: await assetInfo.json(), balance })
  }

  return response

}

export { loadAddressAssets, mintToken }
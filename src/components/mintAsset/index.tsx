import { useState } from "react"
import { mintToken } from "@/utils/goTeam"

function MintAsset() {
  const [account, setAccount] = useState<string | null>(null)
  const [id, setId] = useState<string | null>(null)
  const [amount, setAmount] = useState<string | null>(null)

  function mint() {
    if (account && id && amount) { mintToken(account, +id, +amount) }
  }

  return (
    <div className="flex flex-col w-full max-w-xl p-8 gap-5 items-center bg-white rounded-xl">
      <div className="flex flex-row gap-2 w-full h-full justify-between text-center">
        <div className="font-bold">account</div>
        <input 
          type="text"
          name="account"
          id="account"
          className="bg-[#d9d9d9] rounded-xl p-1"
          onChange={(e) => setAccount(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2 w-full h-full justify-between text-center">
        <div className="font-bold">Token Id</div>
        <input 
          type="number"
          name="participant"
          id="participant"
          className="bg-[#d9d9d9] rounded-xl p-1"
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2 w-full h-full justify-between text-center">
        <div className="font-bold">Amount</div>
        <input 
          type="text"
          name="participant"
          id="participant"
          className="bg-[#d9d9d9] rounded-xl p-1"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="flex p-3 bg-mainColor rounded-xl text-center" onClick={() => mint()}>
        Emitir
      </button>
    </div>
  )
}

export { MintAsset }
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { WalletAssetsInfos } from '@/utils/goTeam'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (id) {
    fetch(`${process.env.METADATA_BUCKET_URL}/${id}.json`, {cache: "force-cache"})
      .then(async (wallets) => {
        const value = await wallets.json() as WalletAssetsInfos
        res.send(value)
      })
      .catch((e) => {
        console.log("Error to load wallets")
        res.status(400).send({
          msg: e
        })
      })
  } else {
    res.status(400).send({msg: "invalid ID"})
  }
  
}

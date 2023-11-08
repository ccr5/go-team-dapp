// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Wallets } from '@/context/wallets/iWalletsContext'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch(`${process.env.METADATA_BUCKET_URL}/wallets.json`)
    .then(async (wallets) => {
      const value = await wallets.json()
      res.send(value)
    })
    .catch(() => {
      console.log("Error to load wallets")
      res.status(400).send({})
    })
}
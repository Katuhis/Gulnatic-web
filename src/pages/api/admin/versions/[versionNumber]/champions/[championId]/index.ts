import type { NextApiRequest, NextApiResponse } from 'next'
import IChampion from '@/interfaces/IChampion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IChampion>
): void => {
  const championId = request.query.championId as string
  const champion = {
    id: championId
  }

  response.status(200).json(champion)
}

export default handler

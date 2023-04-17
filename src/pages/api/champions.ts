import type { NextApiRequest, NextApiResponse } from 'next'
import IChampion from '@/interfaces/IChampion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IChampion[]>
): void => {
  const champion1 = {
    id: 'Champion 1'
  }
  const champions = [champion1]

  response.status(200).json(champions)
}

export default handler

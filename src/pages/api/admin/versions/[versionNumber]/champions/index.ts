import type { NextApiRequest, NextApiResponse } from 'next'
import IChampion from '@/interfaces/IChampion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IChampion[]>
): void => {
  const champion1 = {
    id: 'Champion-1'
  }
  const champion2 = {
    id: 'Champion-2'
  }
  const champions = [champion1, champion2]

  response.status(200).json(champions)
}

export default handler

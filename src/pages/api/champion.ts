import type { NextApiRequest, NextApiResponse } from 'next'
import IChampion from '@/interfaces/IChampion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IChampion>
): void => {
  const champion1 = {
    id: 'Champion 1'
  }

  response.status(200).json(champion1)
}

export default handler

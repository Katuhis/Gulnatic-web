import type { NextApiRequest, NextApiResponse } from 'next'
import IVersion from '@/interfaces/IVersion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IVersion>
): void => {
  const versionNumber = request.query.versionNumber as string
  const version = {
    number: versionNumber
  }

  response.status(200).json(version)
}

export default handler

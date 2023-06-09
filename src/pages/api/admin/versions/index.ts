import type { NextApiRequest, NextApiResponse } from 'next'
import IVersion from '@/interfaces/IVersion'

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<IVersion[]>
): void => {
  const version1 = {
    number: 'Version-1'
  }
  const version2 = {
    number: 'Version-2'
  }
  const versions = [version1, version2]

  response.status(200).json(versions)
}

export default handler

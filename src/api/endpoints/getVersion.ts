import IVersion from '@/interfaces/IVersion'
import { instance } from '../'

const getVersion = (versionNumber: string): Promise<IVersion> => {
  return instance
    .get(`versions/${versionNumber}`)
    .then((response) => response.data as IVersion)
    .catch((e) => Promise.reject(e))
}

export default getVersion

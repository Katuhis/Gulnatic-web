import IVersion from '@/interfaces/IVersion'
import { instance } from '../'

const getVersions = (): Promise<IVersion[]> => {
  return instance
    .get('versions')
    .then((response) => response.data as IVersion[])
    .catch((e) => Promise.reject(e))
}

export default getVersions

import IVersion from '@/interfaces/IVersion'
import instance from '../instance'

const getVersions = (): Promise<IVersion[]> => {
  return instance
    .get('admin/versions')
    .then((response) => response.data as IVersion[])
    .catch((e) => Promise.reject(e))
}

export default getVersions

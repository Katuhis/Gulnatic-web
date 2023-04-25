import IVersion from '@/interfaces/IVersion'
import instance from '../instance'

const getVersion = (versionNumber: string): Promise<IVersion> => {
  return instance
    .get(`admin/versions/${versionNumber}`)
    .then((response) => response.data as IVersion)
    .catch((e) => Promise.reject(e))
}

export default getVersion

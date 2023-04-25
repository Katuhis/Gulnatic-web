import IChampion from '@/interfaces/IChampion'
import instance from '../instance'

const getChampions = (versionNumber: string): Promise<IChampion[]> => {
  return instance
    .get(`admin/versions/${versionNumber}/champions`)
    .then((response) => response.data as IChampion[])
    .catch((e) => Promise.reject(e))
}

export default getChampions

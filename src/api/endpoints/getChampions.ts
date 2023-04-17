import IChampion from '@/interfaces/IChampion'
import { instance } from '../'

const getChampions = (versionNumber: string): Promise<IChampion[]> => {
  return instance
    .get(`versions/${versionNumber}/champions`)
    .then((response) => response.data as IChampion[])
    .catch((e) => Promise.reject(e))
}

export default getChampions

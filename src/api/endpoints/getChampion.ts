import IChampion from '@/interfaces/IChampion'
import { instance } from '../'

const getChampion = (versionNumber: string, championId: string): Promise<IChampion> => {
  return instance
    .get(`versions/${versionNumber}/champions/${championId}`)
    .then((response) => response.data as IChampion)
    .catch((e) => Promise.reject(e))
}

export default getChampion

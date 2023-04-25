import IChampion from '@/interfaces/IChampion'
import instance from '../instance'

const getChampion = (versionNumber: string, championId: string): Promise<IChampion> => {
  return instance
    .get(`admin/versions/${versionNumber}/champions/${championId}`)
    .then((response) => response.data as IChampion)
    .catch((e) => Promise.reject(e))
}

export default getChampion

import axios, { CreateAxiosDefaults } from 'axios'
import getVersion from './endpoints/getVersion'
import getVersions from './endpoints/getVersions'
import getChampion from './endpoints/getChampion'
import getChampions from './endpoints/getChampions'

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: 'Some auth token'
  }
} as CreateAxiosDefaults)

const api = {
  getVersion,
  getVersions,
  getChampion,
  getChampions
}

export {
  instance
}
export default api

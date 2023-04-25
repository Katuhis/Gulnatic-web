import axios, { CreateAxiosDefaults } from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: 'Some auth token'
  }
} as CreateAxiosDefaults)

export default instance

import { config } from '@api/config'
import axios from 'axios'

const defaultOptions = {
  baseURL: config.apiHost,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const axiosInstance = axios.create(defaultOptions)

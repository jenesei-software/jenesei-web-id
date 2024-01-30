import { config } from '@api/config'
import axios from 'axios'

const defaultOptions = {
  baseURL: config.apiHost,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export const axiosInstance = axios.create(defaultOptions)

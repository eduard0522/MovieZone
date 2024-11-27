import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3100',
  withCredentials: true
})

export default AxiosInstance

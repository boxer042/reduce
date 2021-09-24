import axios from 'axios'

const client = axios.create({
  withCredentials: true,
})

client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://34.133.218.137:8080'
    : 'http://34.133.218.137:8080'

export default client

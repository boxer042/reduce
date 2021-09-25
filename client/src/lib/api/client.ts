import axios from 'axios'

const client = axios.create({
  withCredentials: true,
})

client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://api.jaewoomade.xyz'

export default client

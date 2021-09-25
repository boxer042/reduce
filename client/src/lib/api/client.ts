import axios from 'axios'

const client = axios.create({
  withCredentials: true,
})

client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://api.jaewoomade.xyz'
    : 'https://api.jaewoomade.xyz'

export default client

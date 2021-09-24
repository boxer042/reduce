import fp from 'fastify-plugin'
import { decodeToken } from '../lib/jwt'

export default fp(async (fastify, opts) => {
  fastify.decorateRequest('user', null)
  fastify.addHook('preHandler', async (request, reply) => {
    const accessToken: string | undefined = request.cookies.accessToken
    console.log(request.cookies.accessToken)
    try {
      const decoded = await decodeToken<UserTokenDecoded>(accessToken)
      console.log(decoded.userId)
      request.user = {
        id: decoded.userId,
      }
    } catch (error) {
      console.log(error)
    }
  })
})

declare module 'fastify' {
  interface FastifyRequest {
    user: null | { id: string }
  }
}

export type UserTokenDecoded = {
  subject: string
  userId: string
  iat: number
  exp: number
}

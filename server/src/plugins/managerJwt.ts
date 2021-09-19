import fp from 'fastify-plugin'
import { decodeToken } from '../lib/jwt'

export default fp(async (fastify, opts) => {
  fastify.decorateRequest('manager', null)
  fastify.addHook('preHandler', async (request, reply) => {
    const accessToken: string | undefined = request.cookies.accessToken
    try {
      const decoded = await decodeToken<ManagerTokenDecoded>(accessToken)
      request.manager = {
        id: decoded.managerId,
      }
    } catch (error) {
      console.log(error)
    }
  })
})

declare module 'fastify' {
  interface FastifyRequest {
    manager: null | { id: string }
  }
}

export type ManagerTokenDecoded = {
  subject: string
  managerId: string
  iat: number
  exp: number
}

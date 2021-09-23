import { PrismaClient } from '@prisma/client'
import { FastifyPluginAsync } from 'fastify'
import { generateToken } from '../../lib/jwt'
import GoogleRegisterBodySchema from '../../schema/manager/googleRegister/body.json'

const prisma = new PrismaClient()

const manager: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  /**
   * GET /manager/official/me
   */
  fastify.get('/official/me', async function (request, reply) {
    if (!request.user) {
      reply.status(401)
      const error = new Error('Unauthorized')
      error.name = 'UnauthorizedError'
      throw error
    }

    const manager = await prisma.manager.findUnique({
      where: {
        id: request.user.id,
      },
    })
    reply.send(manager)
  })

  /**
   * POST /manager/official/register
   */
  fastify.post<{ Body: { email: string; name: string } }>(
    '/official/register',
    async function (request, reply) {
      const { email, name } = request.body
      try {
        const registerManager = await prisma.manager.create({
          data: {
            email: email,
            name: name,
          },
        })
        reply.send(registerManager)
      } catch (error) {
        reply.send(error)
      }
    }
  )

  /**
   * POST /manager/officail/signin
   */
  fastify.post<{ Body: { email: string } }>(
    '/official/signin',
    async function (request, reply) {
      const { email } = request.body
      try {
        const manager = await prisma.manager.findUnique({
          where: {
            email: email,
          },
        })

        if (!manager) {
          reply.status(401)
          reply.send('Manager is not registered')
        }

        if (!manager?.isCertified) {
          reply.send('아직 허용되지 않은 매니저입니다.')
          return
        }

        const managerAccessToken = await generateToken(
          {
            suject: 'accessToken',
            managerId: manager.id,
          },
          {
            expiresIn: '15d',
          }
        )

        reply.setCookie('accessToken', managerAccessToken, {
          path: '/',
          maxAge: 60 * 60 * 24 * 15,
          httpOnly: true,
          sameSite: 'none',
        })

        reply.send({ manager: manager, accessToken: managerAccessToken })
      } catch (error) {
        reply.send(error)
      }
    }
  )

  /**
   * POST /manager/google/register
   * 리듀스 매니저 구글로 가입하기
   */
  fastify.post<{
    Body: { accessToken: string; profile: { mobile: string; address: string } }
  }>(
    '/google/register',
    {
      schema: {
        body: GoogleRegisterBodySchema,
      },
    },
    async function (request, reply) {
      const { accessToken, profile } = request.body
      try {
        // const googleProfile = accessToken
        reply.send({
          accessToken: accessToken,
          profile: profile,
        })
      } catch (error) {}
    }
  )
  /**
   * POST /manager/google/signin
   * 리듀스 매니저 구글로 로그인하기
   */
  fastify.post('/google/signin', async function (request, reply) {})
  /**
   * POST /manager/google/check
   * Check whether manager already has registered
   * 매니저가 이미 등록했는지 확인
   */
  fastify.post('/google/check', async function (request, reply) {})
}

export default manager

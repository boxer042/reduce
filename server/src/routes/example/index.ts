import { PrismaClient } from '@prisma/client'
import { FastifyPluginAsync } from 'fastify'
import checkAdmin from '../../lib/checkAdmin'

const prisma = new PrismaClient()

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    '/',
    {
      preHandler: checkAdmin,
    },
    async function (request, reply) {
      return 'this is an example1'
    }
  )

  fastify.post<{ Body: { name: string; parentId: number } }>(
    '/create',
    async function (request, reply) {
      const { name, parentId } = request.body
      try {
        const createLocaion = await prisma.location.create({
          data: {
            name: name,
            parentId: parentId,
          },
        })
        reply.send(createLocaion)
      } catch (error) {
        reply.send(error)
      }
    }
  )

  fastify.get('/list', async function (request, reply) {
    const locations = await prisma.location.findMany({
      include: {
        parent: true,
        children: {
          include: {
            children: true,
          },
        },
      },
    })
    reply.send(locations)
  })
}

export default example

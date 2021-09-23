import { PrismaClient } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

const prisma = new PrismaClient()

export default async function checkAdmin(
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (!request.user) {
    reply.status(401)
    throw new Error('unauthorized')
  }

  const manager = await prisma.manager.findUnique({
    where: {
      id: request.user.id,
    },
  })
  if (!manager) {
    reply.status(401)
    throw new Error('Not Sign in')
  }
  if (!manager.isCertified || manager.role !== 'ADMIN') {
    reply.status(401)
    throw new Error('Not Allowed Manager')
  }
}

// Admin manager 인지 확인하는 preHandler

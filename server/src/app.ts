import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'
import { FastifyPluginAsync } from 'fastify'
import cors from 'fastify-cors'
import cookie from 'fastify-cookie'

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!
  fastify.register(cookie)
  fastify.register(cors, {
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true)
      }
      const host = origin.split('://')[1]
      const allowedHost = [
        'localhost:3000',
        'boxer042.github.io',
        'boxer042.github.io/reduce',
        'https://boxer042.github.io',
        'boxer042.github.io/reduce/',
        'https://boxer042.github.io/reduce/',
      ]
      const allowed = allowedHost.includes(host)
      callback(null, allowed)
    },
    credentials: true,
  })
  // fastify.setErrorHandler((error, request, reply) => {
  //   reply.send({
  //     statusCode: error.statusCode,
  //     name: error.name,
  //     message: error.message,
  //     validation: error.validation,
  //     stack: error.stack,
  //   })
  // })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  })
}

export default app
export { app }

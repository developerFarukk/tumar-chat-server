import { RequestHandler, Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { arcjetProtection } from '../middlewares/arcjet.middleware'
import { MessageRoutes } from '../modules/message/message.route'

const router = Router()
router.use(arcjetProtection as RequestHandler)

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router



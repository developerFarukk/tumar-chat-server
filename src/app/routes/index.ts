import { RequestHandler, Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { arcjetProtection } from '../middlewares/arcjet.middleware'

const router = Router()
router.use(arcjetProtection as RequestHandler)

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router



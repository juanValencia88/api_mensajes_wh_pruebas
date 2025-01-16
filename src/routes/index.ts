import { Router } from 'express'
import whRoutes from './whRoutes'

const router = Router()

router.use('/', whRoutes)

export default router
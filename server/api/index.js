import { Router } from 'express'

import users from './users'
import test from './test'
import counties from './counties'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(test)
router.use(counties)

export default router

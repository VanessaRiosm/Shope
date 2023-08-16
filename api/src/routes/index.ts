import {Router} from 'express'
import users from './users.routes'
import auth from './auth.routes'
import products from './products.routes'

const router = Router()

router.use('/users', users)
router.use('/auth', auth)
router.use('/products', products)

export default router

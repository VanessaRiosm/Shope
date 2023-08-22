import {Router} from 'express'
import users from './users.routes'
import auth from './auth.routes'
import products from './products.routes'
import cart from './cart.routes'

const router = Router()

router.use('/users', users)
router.use('/auth', auth)
router.use('/products', products)
router.use('/cart', cart)

export default router

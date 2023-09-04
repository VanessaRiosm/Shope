import {Router} from 'express'
import users from './users.routes'
import auth from './auth.routes'
import products from './products.routes'
import cart from './cart.routes'
import categories from './categories.routes'

const router = Router()

router.use('/users', users)
router.use('/auth', auth)
router.use('/products', products)
router.use('/cart', cart)
router.use('/categories', categories)

export default router

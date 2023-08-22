import {Router} from 'express'
import {addToCart, removeFromCart} from '../controllers/cart.controller'
// import verifyToken from '../middlewares/auth.middleware'

const router = Router()

router.put('/add/:', addToCart)
router.put('/remove/:', removeFromCart)

export default router

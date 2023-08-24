import {Router} from 'express'
import {addToCart, removeFromCart} from '../controllers/cart.controller'
// import verifyToken from '../middlewares/auth.middleware'

const router = Router()

router.put('/add/:usId', addToCart)
router.put('/remove/:id', removeFromCart)

export default router

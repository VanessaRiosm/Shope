import {Router} from 'express'
import {makePurchase} from '../controllers/purchase.controller'
import verifyToken from '../middlewares/auth.middleware'

const router = Router()

router.post('/checkout', [verifyToken], makePurchase)

export default router

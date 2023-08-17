import {Router} from 'express'
import {login, verifyUser} from '../controllers/auth.controller'
import verifyToken from '../middlewares/auth.middleware'

const router = Router()

router.post('/login', login)
router.get('/getuser', [verifyToken], verifyUser)

export default router

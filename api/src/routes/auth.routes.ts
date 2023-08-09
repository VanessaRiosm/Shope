import {Router} from 'express'
import {login} from '../controllers/auth.controller'
// import auth from '../middlewares/auth.middleware'

const router = Router()

router.post('/login', login)
// router.get('/', verifyUser)

export default router

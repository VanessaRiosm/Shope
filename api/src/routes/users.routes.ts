import {Router} from 'express'
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/users.controller'
import verifyRol from '../middlewares/admin.middleware'

const router = Router()

router.post('/', createUser)
router.get('/', getUsers)
router.put('/update/:uid', updateUser)
router.delete('/delete/:uid', [verifyRol], deleteUser)

export default router

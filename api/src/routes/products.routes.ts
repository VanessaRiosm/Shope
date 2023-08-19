import {Router} from 'express'
import {
  createProduct,
  getProductDetails,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller'
import verifyToken from '../middlewares/auth.middleware'
import verifyRol from '../middlewares/admin.middleware'

const router = Router()

router.get('/', getProducts)
router.get('/details/:id', getProductDetails)
router.post('/', createProduct)
router.put('/update/:pid', updateProduct)
router.delete('/delete/:pid', [verifyToken], [verifyRol], deleteProduct)

export default router

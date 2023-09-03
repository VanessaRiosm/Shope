import {Router} from 'express'
import {
  createProduct,
  getProductDetails,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProduct,
} from '../controllers/products.controller'
import verifyToken from '../middlewares/auth.middleware'
import verifyRol from '../middlewares/admin.middleware'

const router = Router()

router.get('/', getProducts)
router.get('/details/:id', getProductDetails)
router.post('/', createProduct)
router.put('/update/:pid', updateProduct)
router.delete('/delete/:pid', [verifyToken], [verifyRol], deleteProduct)
router.get('/search/', searchProduct)

export default router

import {Router} from 'express'
import {getCategories} from '../controllers/categories.controller'

const router = Router()

router.get('/', getCategories)

export default router


import {Router} from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, getProductTask, updateProduct } from '../controllers/products.controllers.js'

const router = Router()


router.get('/products', getProducts)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)
router.get('/products/:id', getProduct)

router.get('/products/:id/tasks', getProductTask)

export default router
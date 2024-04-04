import { Router } from "express";
import * as productController from "../controllers/products.controllers.js";


const router = Router();

router.get('/', productController.getProducts)

router.get('/:id', productController.getProductById)

router.post('/', productController.createProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

export default router;
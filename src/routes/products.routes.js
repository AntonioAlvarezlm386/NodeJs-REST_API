import { Router } from "express";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";
import * as productController from "../controllers/products.controllers.js";


const router = Router();

router.get('/', productController.getProducts)

router.get('/:id', productController.getProductById)

router.post('/', verifyToken, isModerator, productController.createProduct)

router.put('/:id',verifyToken, isModerator, productController.updateProduct)

router.delete('/:id', verifyToken, isAdmin, productController.deleteProduct)

export default router; 
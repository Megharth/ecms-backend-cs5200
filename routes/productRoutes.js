import express from 'express';
import productController from '../controllers/productController.js';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
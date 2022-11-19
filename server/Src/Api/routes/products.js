import express from 'express';
import {
  createProduct,
  GetAllProducts,
  DeleteProductById,
  GitSingleProduct,
} from '../controllers/productsControl.js';

const router = express.Router();
router.post('/create', createProduct);
router.post('/find', GitSingleProduct);
router.post('/all', GetAllProducts);
router.delete('/delete', DeleteProductById);

export default router;

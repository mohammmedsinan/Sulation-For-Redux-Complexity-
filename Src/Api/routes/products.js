import express from 'express';
import {
  createProduct,
  GetAllProducts,
  DeleteProductById,
  GitSingleProduct,
  updateProduct,
} from '../controllers/productsControl.js';

const router = express.Router();
router.post('/create', createProduct);
router.post('/get', GitSingleProduct);
router.post('/all', GetAllProducts);
router.delete('/delete', DeleteProductById);
router.put('/update/:id', updateProduct);

export default router;

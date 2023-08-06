import express from 'express';
import {
  getProducts,
  getProductsById,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);

export default productRouter;

import express from 'express';
import { getReviews, postReview } from '../controllers/reviewController.js';
import { getProducts, getProductsById } from '../controllers/productController.js';
import { authorize } from '../middlewares/authHandler.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductsById);
productRouter.get('/:id/reviews', getReviews);

productRouter
  .route('/:id/reviews')
  .post(authorize, postReview);

export default productRouter;

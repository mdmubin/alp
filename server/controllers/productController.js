import Product from '../models/product.js';
import { throwServerError } from './utils.js';

export async function getProducts(_req, res, next) {
  Product.find({}).exec()
    .then((products) => res.json(products))
    .catch((error) => next(error));
}

export async function getProductsById(req, res, next) {
  Product.findById(req.params.id).exec()
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        throwServerError('Could not find the requested product', 404);
      }
    })
    .catch((error) => next(error));
}

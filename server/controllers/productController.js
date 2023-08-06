import Product from '../models/product.js';

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
        const error = Error('Could not find the requested product');
        error.status = 404;
        throw error;
      }
    })
    .catch((error) => next(error));
}

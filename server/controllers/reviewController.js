/* eslint-disable no-underscore-dangle */

import Review from '../models/review.js';
import Product from '../models/product.js';
import { throwServerError } from './utils.js';

export async function getReviews(req, res, next) {
  Product.findById(req.params.id).exec()
    .then((product) => {
      if (product) {
        return Promise.all(product.reviews.map((r) => Review.findById(r).exec()));
      }
      return throwServerError('No such product found.', 404);
    })
    .then((r) => res.json(r))
    .catch((error) => next(error));
}

export async function postReview(req, res, next) {
  const { user } = req;
  const { rating, comment } = req.body;

  const newReview = {
    postedBy: user._id,
    rating,
    comment,
  };

  let product;

  Product.findById(req.params.id).exec()
    .then((prod) => {
      if (prod) {
        product = prod;
        return Promise.all(prod.reviews.map((r) => Review.findById(r).select('-_id').exec()));
      }
      return throwServerError('No such product found.', 404);
    })
    .then((reviews) => {
      const existing = reviews.filter((r) => r.postedBy.toString() === user._id.toString());
      if (existing && existing.length !== 0) {
        throwServerError('User has already reviewed this product', 409);
      }
    })
    .then(() => Review.create(newReview))
    .then((review) => {
      if (!review) {
        throwServerError('Failed to add product review.', 500);
      }
      return Product.findOneAndUpdate({ _id: product._id }, {
        category: 'updated',
        numReviews: product.numReviews + 1,
        reviews: [...product.reviews, review._id],
      }).exec();
    })
    .then((result) => {
      if (result) {
        res.status(204);
        res.end();
      } else {
        throwServerError('', 500);
      }
    })
    .catch((error) => next(error));
}

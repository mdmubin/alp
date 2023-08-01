import express from 'express';
import { Product } from '../models/index.js';

const productRouter = express.Router();

productRouter.get('/', (_req, res) => {
  Product.find({})
    .then((products) => res.json(products))
    .catch((error) => {
      console.log(`An error occurred: ${error.message}`);
      res.status(500).send('Unexpected server error!');
    });
});

productRouter.get('/:id', (req, res) => {
  Product.findById(req.params.id).then((product) => {
    if (product === null) {
      res.status(404).send('Could not find the requested product');
    } else {
      res.json(product);
    }
  }).catch((error) => {
    console.log(`An error occurred: ${error.message}`);
    res.status(500).send('Unexpected server error!');
  });
});

export default productRouter;

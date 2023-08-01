import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import products from './data/products.js';

import * as config from './config/config.js';

const app = express();

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(`Connected to database: ${res.connection.name}`))
  .catch((error) => console.error(error.message));

app.use(cors()); // enable cors for all origins

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.get('/products', (_req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});

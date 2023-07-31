import express from 'express';
import cors from 'cors';
import products from './data/temp.js';

const app = express();
const port = 5000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

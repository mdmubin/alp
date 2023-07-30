import express from 'express';
import products from './data/temp.js';

const app = express();
const port = 5000;

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

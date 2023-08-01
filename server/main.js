import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import productRouter from './routes/productRouter.js';
import * as config from './config/config.js';

const app = express();

// mongodb connection
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(`Connected to database: ${res.connection.name}`))
  .catch((error) => console.error(error.message));

// app configuration

app.use(cors()); // enable cors for all origins
app.use('/api/products', productRouter);

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});

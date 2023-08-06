import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import * as config from './config/config.js';
import { productRouter, userRouter } from './routes/index.js';
import defaultErrorHandler from './middlewares/errorHandler.js';

const app = express();

// mongodb connection
mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(`Connected to database: ${res.connection.name}`))
  .catch((error) => {
    console.error(`Failed to connect to database: ${error.message}`);
    process.exit(1);
  });

// app middleware configuration

app.use(cors());
app.use(express.json());

// app routing configuration

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// app error handlers
app.use(defaultErrorHandler);

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`);
});

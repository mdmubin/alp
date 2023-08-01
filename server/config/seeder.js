/// This data seeder script is seperate from the project, and is only used to
/// seed the data into the mongodb database.
///
/// ```
/// node server/config/seeder.js flush
/// node server/config/seeder.js seed
/// ```
///

import mongoose from 'mongoose';
import users from './data/users.js';
import products from './data/products.js';
import * as config from './config.js';
import {
  Order, Product, Review, User,
} from '../models/index.js';

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(`Connected to database: ${res.connection.name}`))
  .catch((error) => console.error(error.message));

const seedData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();

    const createdUsers = await User.insertMany(users);
    // const createdProducts = await Product.insertMany(products);

    // eslint-disable-next-line no-underscore-dangle
    const adminId = createdUsers[0]._id;

    const productSeed = products.map((p) => ({ postedBy: adminId, ...p }));

    await Product.insertMany(productSeed);

    console.log('Data has been seeded successfully!');
  } catch (error) {
    console.log(`Failed to seed data: ${error.message}`);
    process.exit(1);
  }
};

const flushData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();

    console.log('Data has been cleared successfully!');
  } catch (error) {
    console.log(`Failed to clear data: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === 'seed') {
  seedData().then(() => process.exit(0));
} else if (process.argv[2] === 'flush') {
  flushData().then(() => process.exit(0));
}

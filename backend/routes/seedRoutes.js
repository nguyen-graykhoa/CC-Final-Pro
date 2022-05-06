import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import RentalProperty from '../models/propertyModel.js';
import Car from '../models/carModel.js';
import News from '../models/newsModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
  await RentalProperty.remove({});
  const createdProperties = await RentalProperty.insertMany(
    data.rentalproperties
  );
  await Car.remove({});
  const createdCars = await Car.insertMany(data.cars);
  await News.remove({});
  const createdNews = await News.insertMany(data.news);
});
export default seedRouter;

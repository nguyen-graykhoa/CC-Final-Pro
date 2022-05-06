import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Car from '../models/carModel.js';

const carRouter = express.Router();

carRouter.get('/', async (req, res) => {
  const cars = await Car.find();
  res.send(cars);
});

carRouter.get('/slug/:slug', async (req, res) => {
  const car = await Car.findOne({ slug: req.params.slug });
  if (car) {
    res.send(car);
  } else {
    res.status(404).send({ message: 'car Not Found' });
  }
});

export default carRouter;

import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import RentalProperty from '../models/propertyModel.js';

const propertyRouter = express.Router();

propertyRouter.get('/', async (req, res) => {
  const properties = await RentalProperty.find();
  res.send(properties);
});

propertyRouter.get('/slug/:slug', async (req, res) => {
  const property = await RentalProperty.findOne({ slug: req.params.slug });
  if (property) {
    res.send(property);
  } else {
    res.status(404).send({ message: 'Property Not Found' });
  }
});


export default propertyRouter;

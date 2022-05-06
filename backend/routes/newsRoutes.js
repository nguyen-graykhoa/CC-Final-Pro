import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import News from '../models/newsModel.js';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  const news = await News.find();
  res.send(news);
});

newsRouter.get('/slug/:slug', async (req, res) => {
  const news = await News.findOne({ slug: req.params.slug });
  if (news) {
    res.send(news);
  } else {
    res.status(404).send({ message: 'News Article Not Found' });
  }
});

export default newsRouter;

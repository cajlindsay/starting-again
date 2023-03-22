import express from 'express';
import { CarTemplate } from './db-model.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const docs = await CarTemplate.find({});
    return res.json(docs);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/', async (req, res) => {
  const car = new CarTemplate(req.body);
  const insertedCar = await car.save();
  return res.json(insertedCar);
});

router.delete('/:carId', async (req, res) => {
  await CarTemplate.deleteOne({ _id: req.params.carId });
  return res.sendStatus(200);
});

export default router;

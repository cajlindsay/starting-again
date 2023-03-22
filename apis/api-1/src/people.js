import express from 'express';
import { PersonTemplate } from './db-model.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const docs = await PersonTemplate.find({});
    return res.json(docs);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/', async (req, res) => {
  const car = new PersonTemplate(req.body);
  const insertedCar = await car.save();
  return res.json(insertedCar);
});

router.delete('/:personId', async (req, res) => {
  await PersonTemplate.deleteOne({ _id: req.params.personId });
  return res.sendStatus(200);
});

export default router;

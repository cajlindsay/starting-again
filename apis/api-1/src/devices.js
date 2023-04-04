import express from 'express';
import { DeviceTemplate } from './db-model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const docs = await DeviceTemplate.find({});
  return res.json(docs);
});

router.post('/', async (req, res) => {
  const doc = new DeviceTemplate(req.body);
  const insertedDoc = await doc.save();
  return res.json(insertedDoc);
});

router.delete('/:id', async (req, res) => {
  await DeviceTemplate.deleteOne({ _id: req.params.id });
  return res.sendStatus(200);
});

export default router;

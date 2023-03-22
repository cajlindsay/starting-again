import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('routes-1 - root');
});

export default router;

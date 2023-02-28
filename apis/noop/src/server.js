import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ api: 'noop' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('noop listening on port ' + PORT);
});

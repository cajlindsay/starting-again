import express from 'express';
import foo from 'package-1/src/module-1.js';
import routes1 from './routes-1.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('api-1 - ' + foo());
});

app.use('/routes-1', routes1);

app.listen(PORT, () => {
  console.log('api-1 listening on port ' + PORT);
});
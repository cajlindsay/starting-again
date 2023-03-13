import express from 'express';
import authenticate from '@starting-again/api-common/src/auth-msal.js';
import foo from '@starting-again/package-1/src/module-1.js';
import routes1 from './routes-1.js';

const app = express();
app.use(express.json());
app.use(authenticate);

app.get('/', (req, res) => {
  res.json({ api: 'api-1', module: foo(), name: req.authInfo.name });
});

app.use('/routes-1', routes1);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

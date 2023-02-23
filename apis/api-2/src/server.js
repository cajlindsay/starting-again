import express from 'express';
import authenticate from '@starting-again/api-common/src/auth-msal';
import foo from '@starting-again/package-1/src/module-1';
import routes1 from './routes-1.js';

const app = express();

app.use(authenticate);

app.get('/', (req, res) => {
  res.send('api-2 - ' + foo());
});

app.use('/routes-1', routes1);

if (import.meta.env.PROD) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log('api-2 listening on port ' + PORT);
  });
}

export const viteNodeApp = app;

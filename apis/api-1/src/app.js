import express from 'express';
import authenticate from '@starting-again/api-common/src/auth-msal.js';
import routes1 from './routes-1.js';
import { default as carsRoutes } from './cars.js';
import { default as peopleRoutes } from './people.js';
import { default as devicesRoutes } from './devices.js';

export const app = express();
app.use(authenticate);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ api: 'api-1' }); //) req.authInfo.name });
});

app.use('/routes-1', routes1);
app.use('/cars', carsRoutes);
app.use('/people', peopleRoutes);
app.use('/devices', devicesRoutes);

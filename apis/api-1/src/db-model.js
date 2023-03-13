import { Mongoose } from 'mongoose';
import { carSchema } from './db-schema.js';
import connectionString from './mongo-connection-string.js';

const db = new Mongoose();

db.connect(connectionString())
  .then(() => {
    console.info('Successfully connected to the database');
  })
  .catch((error) => {
    console.info('Failed to connect to database');
    console.info(error.stack);
  });

export const CarTemplate = db.model('Car', carSchema);

import { Mongoose } from 'mongoose';
import { carSchema, personSchema, deviceSchema } from './db-schema.js';
import connectionString from './mongo-connection-string.js';

const db = new Mongoose();

export const CarTemplate = db.model('Car', carSchema);
export const PersonTemplate = db.model('Person', personSchema);
export const DeviceTemplate = db.model('Device', deviceSchema );

db.connect(connectionString())
  .then(() => {
    console.info('Successfully connected to the database');
  })
  .catch((error) => {
    console.info('Failed to connect to database');
    console.info(error.stack);
  });

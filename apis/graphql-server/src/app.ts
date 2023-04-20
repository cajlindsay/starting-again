import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import fs from 'fs';
import path from 'path';
import dirname from '@starting-again/api-common/src/dirname.ts';
import { CarTemplate } from '@starting-again/db/src/model.js';

// import authenticate from '@starting-again/api-common/src/auth-msal.js';

export const app = express();

// app.use(authenticate);

// Construct a schema, using GraphQL schema language
const schemaPath = path.join(dirname(import.meta.url), 'schema.graphql');
const schemaString = fs.readFileSync(schemaPath, 'utf-8');
const schema = buildSchema(schemaString);

// The root provides a resolver function for each API endpoint
const rootValue = {
  cars: () => CarTemplate.find({}),
  createCar: ({ input }) => new CarTemplate(input).save(),
  deleteCar: ({ carId }) => CarTemplate.deleteOne({ _id: carId }),
  rollDice: ({ numDice, numSides }) => {
    const output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};

// graphql endpoint
app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import bodyParser from 'body-parser';

/* import fs from 'fs';
import path from 'path';
import dirname from '@starting-again/api-common/src/dirname.ts'; */
import { CarTemplate } from '@starting-again/db/src/model.js';

export const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
  type Car {  
    id: String!
    make: String!
    model: String!
  }

  input CarInput {
    make: String!
    model: String!
  }

  type DeleteResult {
    n: Int
    ok: Int
    deletedCount: Int
  }

  type Query {
    cars: [Car]!
    rollDice(numDice: Int!, numSides: Int): [Int]
  }

  type Mutation {
    createCar(input: CarInput): Car
    deleteCar(carId: String!): DeleteResult
  }
`;

// construct a schema, using GraphQL schema language
/* const schemaPath = path.join(dirname(import.meta.url), 'schema.graphql');
const schemaString = fs.readFileSync(schemaPath, 'utf-8');
const schema = buildSchema(schemaString);
 */
// root resolvers
const resolvers = {
  Query: {
    cars: async () => await CarTemplate.find({}),
    rollDice: ({ numDice, numSides }) => {
      const output = [];
      for (let i = 0; i < numDice; i++) {
        output.push(1 + Math.floor(Math.random() * (numSides || 6)));
      }
      return output;
    }
  },
  Mutation: {
    createCar: async (_, { input }) => await new CarTemplate(input).save(),
    deleteCar: async (_, { carId }) => await CarTemplate.deleteOne({ _id: carId })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

server.start().then(() => {
  app.use(bodyParser.json(), expressMiddleware(server));
});
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import Query from './resolvers/Query';
import User from './resolvers/User';

import ResourceLoader from './ResourceLoader';

const userLoader = new ResourceLoader('http://localhost:3001');
const bookingLoader = new ResourceLoader('http://localhost:3002');
const flightLoader = new ResourceLoader('http://localhost:3003');

const server = new ApolloServer({
  typeDefs: importSchema('src/schema.graphql'),
  resolvers: {
    Query,
    User
  },
  context: {
    userLoader,
    flightLoader,
    bookingLoader
  }
});

server.listen(5000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

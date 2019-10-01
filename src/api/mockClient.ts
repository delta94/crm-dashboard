import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import {
  InMemoryCache,
} from 'apollo-cache-inmemory';

import schemaString from './mockSchema';
import mocks from './mocks';

const schema = makeExecutableSchema({ typeDefs: schemaString });

addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true,
});

const cache = new InMemoryCache();

export default new ApolloClient({
  cache,
  link: new SchemaLink({ schema }),
});

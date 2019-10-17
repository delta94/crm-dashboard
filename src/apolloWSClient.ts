import { ApolloClient } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8081/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: { 'x-hasura-admin-secret': 'insecure' },
    },
  },
});

const client = new ApolloClient({
  cache: cache,
  link: wsLink,
});

export default client;

import { ApolloClient, InMemoryCache, split, HttpLink } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { env, httpUrlToWebSocketUrl } from 'helpers';

const headers = { 'x-hasura-admin-secret': 'insecure' };

const wsLink = new WebSocketLink({
  uri: `${httpUrlToWebSocketUrl(env('API_URL'))}/v1/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers,
    },
  },
});

const httpLink = new HttpLink({
  uri: `${env('API_URL')}/v1/graphql`,
  headers,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default client;

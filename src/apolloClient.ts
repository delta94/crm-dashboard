import { ApolloClient, InMemoryCache, split, HttpLink } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { env, httpUrlToWebSocketUrl } from 'helpers';

const getClient = (token: string) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const wsLink = new WebSocketLink({
    uri: `${httpUrlToWebSocketUrl(env('API_URL'))}/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: { headers },
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

  return new ApolloClient({ cache, link });
};

export default getClient;

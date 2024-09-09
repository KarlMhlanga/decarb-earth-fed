import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://league-api.staging.decarb.earth/graphql',
  cache: new InMemoryCache(),
});

export default client;

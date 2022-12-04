import { ApolloClient, InMemoryCache } from "@apollo/client";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta/',
  cache: new InMemoryCache()
});

export default client
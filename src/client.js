import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
const httpLink = new HttpLink({
  uri: "https://smkureact.hasura.app/v1/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://smkureact.hasura.app/v1/graphql",
});
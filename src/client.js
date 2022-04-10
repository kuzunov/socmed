import { ApolloClient, HttpLink, InMemoryCache, split} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import {GraphQLWsLink} from '@apollo/client/link/subscriptions'
import {setContext} from '@apollo/client/link/context'
import { GRAPHQL_URL, REALTIME_GRAPHQL_URL } from "./utils/constants";
import { createClient } from "graphql-ws";

const getHeaders = () => {
  const token = localStorage.getItem("auth0:id_token");
  const headers = {
    Authorization: token ? `Bearer ${token}` : ""
  };
  return headers;
};

const makeApolloClient = () => {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("auth0:id_token");
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  const token = localStorage.getItem("auth0:id_token");
  // Create an http link:
  const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    fetch,
    headers: getHeaders(token)
  });

  // Create a WebSocket link:
  const wsLink = new GraphQLWsLink(
    createClient(REALTIME_GRAPHQL_URL, {
      reconnect: true,
      timeout: 30000,
      connectionParams: {
        headers: getHeaders(token)
      }
    })
  );

  // chose the link to use based on operation
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache({
      addTypename: true
    })
  });

  return client;
};

export default makeApolloClient;
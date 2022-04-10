const HASURA_GRAPHQL_ENGINE_HOSTNAME = "smkureact.hasura.app";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const authClientId = "ZbzERso2dAnFUiZWfvDtMQdo0rTmRZHX";
export const authDomain = "lawl.eu.auth0.com";
export const callbackUrl = `http://localhost:3000/`;
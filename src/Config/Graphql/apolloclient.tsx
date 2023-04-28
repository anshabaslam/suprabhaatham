import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "https://suprabhaatham-dev.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  
  export default client;
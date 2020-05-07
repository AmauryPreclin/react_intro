import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import * as serviceWorker from "./serviceWorker";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { persistCache } from "apollo-cache-persist";
import { resolvers, typeDefs } from "./resolvers";
import gql from "graphql-tag";

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: window.localStorage,
});
const client = new ApolloClient({
  cache,
  link: new HttpLink(),
  resolvers,
  typeDefs,
});
/*
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
    todolists: [],
  },
});*/

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <App /> : <Login />;
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

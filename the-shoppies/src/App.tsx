import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Results from "./Components/Results/Results";
import Nominations from './Components/Nominations/Nominations'
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="Components">
        <SearchBar />
        <div className="ResultsandNominations">
          <Results />
          <Nominations />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

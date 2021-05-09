import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import SearchBar from "./Components/SearchBar/SearchBar";
import Results from "./Components/Results/Results";
import Nominations from "./Components/Nominations/Nominations";
import "./App.css";
import Banner from "./Components/Banner/Banner";
require('dotenv').config();

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_URI }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="Components">
        <h1 className="mainTitleComp">Welcome to The Shoppies 🎥</h1>
        <br/>
        <br />
        <Banner />
        <SearchBar />
        <div className="ResultsandNominations">
          <Results />
          <Nominations />
        </div>
        <br />
      </div>
    </ApolloProvider>
  );
}

export default App;

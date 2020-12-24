import React from 'react';
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { gql } from "apollo-boost";

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  });
  
  client
  .query({
    query: gql`
      query allAddresses {
        allAddresses {
          name
        }
      }
    `
  })
  .then(result => console.log(result));

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;

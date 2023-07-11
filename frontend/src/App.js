import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Replace with your server URL
  cache: new InMemoryCache()
});

const GET_HELLO = gql`
  query {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>[Error] {error.toString()}</p>;

  return (
    <div>
      <h1>{data.hello}</h1>
    </div>
  );
}

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default AppWrapper;
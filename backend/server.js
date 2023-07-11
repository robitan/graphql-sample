const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    hello2: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello, GraphQL!',
  hello2: () => 'Hello2, GraphQL!',
};

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL for testing the API in the browser
}));

app.listen(3000, () => {
  console.log('GraphQL server running at http://localhost:3000/graphql');
});

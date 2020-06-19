const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema/schema');

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

const app = express();
const PORT = process.env.PORT || 5000;

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

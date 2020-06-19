const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'Hello',
  },
};

module.exports = { typeDefs, resolvers };

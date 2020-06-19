const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Rocket {
    rocket_id: String!
    rocket_name: String!
    rocket_type: String!
  }
`;

const resolvers = {};

module.exports = { rocketTypeDefs: typeDefs, rocketResolvers: resolvers };

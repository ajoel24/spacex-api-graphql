const { merge } = require('lodash');
const { makeExecutableSchema, gql } = require('apollo-server-express');
const { launchTypeDefs, launchResolvers } = require('./launch/launch');
const { rocketTypeDefs, rocketResolvers } = require('./rocket/rocket');

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [rootTypeDefs, rocketTypeDefs, launchTypeDefs],
  resolvers: merge(rocketResolvers, launchResolvers),
});

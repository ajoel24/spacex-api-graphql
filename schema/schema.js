const { merge } = require('lodash');
const { makeExecutableSchema, gql } = require('apollo-server-express');
const { launchTypeDefs, launchResolvers } = require('./launch/launch');
const { rocketTypeDefs, rocketResolvers } = require('./rocket/rocket');
const { rootTypeDefs, rootResolvers } = require('./rootSchema');

module.exports = makeExecutableSchema({
  typeDefs: [rootTypeDefs, rocketTypeDefs, launchTypeDefs],
  resolvers: merge(rootResolvers, rocketResolvers, launchResolvers),
});

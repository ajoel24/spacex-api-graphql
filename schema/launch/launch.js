const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Launch {
    flight_number: Int!
    mission_name: String!
    launch_year: String!
    launch_date_local: String!
    launch_success: Boolean!
    rocket: Rocket!
  }
`;

const resolvers = {};

module.exports = { launchTypeDefs: typeDefs, launchResolvers: resolvers };

const axios = require('axios');
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

  extend type Query {
    launches: [Launch!]!
    launch(flight_number: Int!): Launch!
  }
`;

const resolvers = {
  Query: {
    launches: async () => {
      const list = await axios.get('https://api.spacexdata.com/v3/launches');
      return list.data;
    },

    launch: async (_, { flight_number }) => {
      const flight = await axios.get(
        `https://api.spacexdata.com/v3/launches/${flight_number}`
      );
      return flight.data;
    },
  },
};

module.exports = { launchTypeDefs: typeDefs, launchResolvers: resolvers };

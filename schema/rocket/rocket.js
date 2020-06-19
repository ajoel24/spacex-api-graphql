const axios = require('axios');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Rocket {
    rocket_id: String!
    rocket_name: String!
    rocket_type: String!
  }

  extend type Query {
    rockets: [Rocket!]!
    rocket(rocket_id: Int!): Rocket!
  }
`;

const resolvers = {
  Query: {
    rockets: async () => {
      const list = await axios.get('https://api.spacexdata.com/v3/rockets');
      return list.data;
    },

    rocket: async (_, { rocket_id }) => {
      const flight = await axios.get(
        `https://api.spacexdata.com/v3/rockets/${rocket_id}`
      );
      return flight.data;
    },
  },
};

module.exports = { rocketTypeDefs: typeDefs, rocketResolvers: resolvers };

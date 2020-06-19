const axios = require('axios');
const { gql } = require('apollo-server-express');

const rootTypeDefs = gql`
  type Query {
    launches: [Launch!]!
    launch(flight_number: Int!): Launch!
    rockets: [Rocket!]!
    rocket(rocket_id: Int!): Rocket!
  }
`;

const rootResolvers = {
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

module.exports = {
  rootTypeDefs,
  rootResolvers,
};

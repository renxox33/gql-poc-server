const { gql } = require("apollo-server");

const typeDefs = gql`

    "A query to get the collection of tracks for homepage"
    type Query {
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    "A track is a group of modules that teaches about a particular topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
        description: String
        numberOfViews: Int
        modules: [Module!]!
    }

    "A module is a single unit of teaching"
    type Module {
        id: ID!
        title: String!
        length: Int
    }

    "An author is the composer of a complete track"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;

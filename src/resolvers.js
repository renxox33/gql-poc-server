const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented track views for track ${id}`,
          track,
        };
      } catch (error) {
          return {
            code: error.extensions.response.status,
            success: false,
            message: error.extensions.response.body,
            track: null
          };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getModulesForTrack(id);
    },
  },
};

module.exports = resolvers;

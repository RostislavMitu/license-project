import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
  name: 'apartment',
  fields: function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      title: {
        type: GraphQLString
      },
      city: {
        type: GraphQLString
      },
      rooms: {
        type: GraphQLInt
      },
      amenities: {
        type: GraphQLList(GraphQLString)
      },
      price: {
        type: GraphQLString
      },
      rules: {
        type: GraphQLList(GraphQLString)
      },
      accessibility: {
        type: GraphQLList(GraphQLString)
      },
      description: {
        type: GraphQLString
      },
      owner: {
        type: GraphQLID
      },
      createdAt: {
        type: GraphQLString
      },
      mainImg: {
        type: GraphQLString
      }
    };
  }
});

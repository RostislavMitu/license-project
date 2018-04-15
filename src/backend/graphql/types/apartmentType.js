import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
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
      rooms: {
        type: GraphQLInt
      },
      amenities: {
        type: GraphQLList(GraphQLString)
      },
      price: {
        type: GraphQLFloat
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
      }
    };
  }
});

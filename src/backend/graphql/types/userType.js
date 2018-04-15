import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
  name: 'user',
  fields: function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      },
      rentedApartemnts: {
        type: GraphQLList(GraphQLID)
      },
      apartments: {
        type: GraphQLList(GraphQLID)
      },
      createdAt: {
        type: GraphQLString
      }
    };
  }
});

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import User from '../../app/models/user';
import userType from '../types/userType';

export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: {
      type: new GraphQLList(userType),
      resolve: function () {
        const users = User.find().exec();
        if (!users) {
          throw new Error('Error');
        }
        return users;
      }
    },
    user: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: function (_, { id }) {
        const user = User.findById(id).exec();
        if (!user) {
          throw new Error('Error');
        }
        return user;
      }
    }
  }
});

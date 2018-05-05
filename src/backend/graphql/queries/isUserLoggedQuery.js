import {
  GraphQLBoolean
} from 'graphql';

export default {
  isUserLogged: {
    type: GraphQLBoolean,
    resolve: function (_, args, { req }) {
      return !!req.user;
    }
  }
};

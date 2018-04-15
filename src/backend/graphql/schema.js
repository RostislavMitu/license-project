import {
  GraphQLSchema
} from 'graphql';
import userQuery from './queries/userQuery';

export default new GraphQLSchema({
  query: userQuery
});

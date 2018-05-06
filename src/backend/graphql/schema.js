import {
  GraphQLSchema
} from 'graphql';
import queries from './queries/queries';
import mutations from './mutations/mutations';

export default new GraphQLSchema({
  query: queries,
  mutation: mutations
});

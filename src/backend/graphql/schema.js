import {
  GraphQLSchema
} from 'graphql';
import queries from './queries/queries';

export default new GraphQLSchema({
  query: queries,
});

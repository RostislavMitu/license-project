import {
  GraphQLObjectType
} from 'graphql';
import apartmentQuery from './apartmentQuery';
import userQuery from './userQuery';

export default new GraphQLObjectType({
  name: 'Query',
  fields: Object.assign({}, userQuery, apartmentQuery)
});

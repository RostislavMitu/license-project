import {
  GraphQLObjectType
} from 'graphql';
import apartmentMutation from './apartmentMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign({}, apartmentMutation)
});

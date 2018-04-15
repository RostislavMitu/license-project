import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import Apartment from '../../app/models/apartment';
import apartmentType from '../types/apartmentType';

export default {
  apartments: {
    type: new GraphQLList(apartmentType),
    resolve: function () {
      const apartments = Apartment.find().exec();
      if (!apartments) {
        throw new Error('Error');
      }
      return apartments;
    }
  },
  apartment: {
    type: apartmentType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: function (_, { id }) {
      const apartment = Apartment.findById(id).exec();
      if (!apartment) {
        throw new Error('Error');
      }
      return apartment;
    }
  }
};

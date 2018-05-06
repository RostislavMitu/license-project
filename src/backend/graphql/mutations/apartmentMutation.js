import {
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import Apartment from '../../app/models/apartment';
import User from '../../app/models/user';
import apartmentType from '../types/apartmentType';

/* eslint-disable no-console */

export default {
  createApartment: {
    type: new GraphQLList(apartmentType),
    args: {
      title: { type: GraphQLString },
      city: { type: GraphQLString },
      rooms: { type: GraphQLInt },
      price: { type: GraphQLString },
      description: { type: GraphQLString }
    },
    resolve: (value, { title, city, rooms, price, description }, { req }) => {
      const newApartment = new Apartment({
        title,
        city,
        rooms,
        price,
        description,
        owner: req.user._id
      });
      newApartment.save(function(err, apartment) {
        User.update(
          {
            _id: req.user._id
          },
          { $push:
            {
              apartments: apartment._id,
            }
          },
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
        if (err) {
          throw err;
        }
      });
    }
  }
};

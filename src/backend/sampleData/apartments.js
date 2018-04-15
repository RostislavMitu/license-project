import Apartment from '../app/models/apartment';
import mongoose from 'mongoose';
import User from '../app/models/user';

mongoose.connect('mongodb://Rostislav:LicensePassword123@ds239309.mlab.com:39309/license_db');

Apartment.remove({}, function() {
  User.find(function(err, users) {
    const sampleApartments = [
      {
        title: 'Apartment in center of Chisinau',
        rooms: 4,
        amenities: ['Hair dryer', 'Kitchen', 'Wifi'],
        price: 95,
        rules: ['No smoking', 'Not suitable for pets'],
        accessibility: [],
        description: 'Charming private house, well located with easy access.',
        owner: users[0]._id,
        mainImg: '/samplePhoto1.jpg'
      },
      {
        title: 'Amazing and Extremely Central Flat',
        rooms: 2,
        amenities: ['Wifi'],
        price: 50,
        rules: ['No smoking'],
        accessibility: [],
        description: 'This is a unique (2 room) apartment located in the heart of the Old Town, 2 mins from the Market Square.',
        owner: users[0]._id,
        mainImg: '/samplePhoto2.jpg'
      },
      {
        title: '180° VIEW, PRIVATE POOL VILLA..',
        rooms: 1,
        amenities: ['Wifi'],
        price: 200,
        rules: ['No smoking'],
        accessibility: [],
        description: 'The villa sits in an elevated postion in one of the last remaining untouched parts of the island.',
        owner: users[0]._id,
        mainImg: '/samplePhoto3.jpg'
      }
    ];

    sampleApartments.concat(sampleApartments).concat(sampleApartments).forEach((apartment) => {
      const newApartment = new Apartment(apartment);
      newApartment.save(function() {
        mongoose.connection.close();
      });
    });
  });
});

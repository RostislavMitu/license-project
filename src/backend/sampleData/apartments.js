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
      }
    ];

    sampleApartments.forEach((apartment) => {
      const newApartment = new Apartment(apartment);
      newApartment.save(function() {
        mongoose.connection.close();
      });
    });
  });
});

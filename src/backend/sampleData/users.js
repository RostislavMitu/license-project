import User from '../app/models/user';
import mongoose from 'mongoose';

mongoose.connect('mongodb://Rostislav:LicensePassword123@ds239309.mlab.com:39309/license_db');

User.remove({}, function() {
  const sampleUsers = [
    {
      firstName: 'Rostislav',
      lastName: 'Mitu',
      age: 22,
      email: 'rostislavmitu@gmail.com',
      password: '12345678'
    },
    {
      firstName: 'Cristi',
      lastName: 'Duluta',
      age: 23,
      email: 'cristiduluta@gmail.com',
      password: '87654321'
    }
  ];

  sampleUsers.forEach((user) => {
    const newUser = new User(user);
    newUser.save(function() {
      mongoose.connection.close();
    });
  });
});

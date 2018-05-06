import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const SALT_FACTOR = 10;
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, min: 18, max: 65, required: false },
  rentedApartemnts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Apartment' }],
  apartments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Apartment' }],
  createdAt: {type: Date, default: Date.now}
});

userSchema.methods.getEmail = function() {
  return this.email;
};

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

userSchema.pre('save', function(done) {
  const user = this;
  if (!user.isModified('password')) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, null, function(err, hashedPassword) {
      if (err) { return done(err); }
      user.password = hashedPassword;
      done();
    });
  });
});

export default mongoose.model('User', userSchema);

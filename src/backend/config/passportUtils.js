import User from '../app/models/user';

export function logIn (email, password, done) {
  User.findOne({ email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'No user has that username!' });
    }
    user.checkPassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password.' });
      }
    });
  });
}

export function signUp (req, email, password, done) {
  User.findOne({ email }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
    }
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email,
      password
    });
    newUser.save(function(err) {
      if (err) {
        throw err;
      }
      return done(null, newUser);
    });
  });
}

export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}

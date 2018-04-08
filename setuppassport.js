import passport from 'passport';
import passportLocal from 'passport-local';
import User from './models/user';

const LocalStrategy = passportLocal.Strategy;
export default function() {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done) {
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
    })
  );

  passport.use('signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback : true
    },
    function(req, email, password, done) {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      User.findOne({ email }, function(err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        }
        const newUser = new User({
          firstName,
          lastName,
          email,
          password
        });
        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      });
    })
  );
}

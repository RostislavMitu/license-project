import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../app/models/user';
import { logIn, signUp } from './passportUtils';

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
  }, logIn));

  passport.use('signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback : true
    }, signUp));
}

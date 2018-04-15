import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import passport from 'passport';
import schema from '../graphql/schema';

const router = express.Router();

router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true
}));

router.get('/signup', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../views/signup.html'));
});

router.get('/login', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../views/login.html'));
});

router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.post('/login', passport.authenticate('login', {
  successRedirect : '/',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

export default router;

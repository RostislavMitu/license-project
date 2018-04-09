import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import path from 'path';
import passport from 'passport';

const router = express.Router();

const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

const root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6));
  }
};

router.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash('error');
  res.locals.infos = req.flash('info');
  next();
});

router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
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

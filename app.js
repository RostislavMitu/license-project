import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import webpack from 'webpack';
import passport from 'passport';
import setUpPassport from './setuppassport';
import routes from './routes';
import config from './webpack.config.dev';

//https://github.com/EvanHahn/Express.js-in-Action-code/tree/master/Chapter_08/learn-about-me

const  app = express();
const compiler = webpack(config);

mongoose.connect('mongodb://localhost:27017/test');

setUpPassport();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

export default app;

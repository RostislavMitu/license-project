import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import { bodyParserGraphQL } from 'body-parser-graphql';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import webpack from 'webpack';
import passport from 'passport';
import setUpPassport from '../config/passport';
import routes from './routes';
import config from '../../../webpack.config.dev';

const app = express();
const compiler = webpack(config);

mongoose.connect('mongodb://Rostislav:LicensePassword123@ds239309.mlab.com:39309/license_db');

setUpPassport();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(express.static(path.resolve(__dirname, '../images')));
app.use(express.static(path.resolve(__dirname, '../sampleData/apartmentsPhoto')));
app.use(bodyParserGraphQL());
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
app.use('*', function (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

export default app;

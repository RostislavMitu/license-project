import open from 'open';
import app from '../app';

/* eslint-disable no-console */

const port = 3000;

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

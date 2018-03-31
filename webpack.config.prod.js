import config from './webpack.config';
import path from 'path';

export default Object.assign({}, config, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
});

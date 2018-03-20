import config from './webpack.config';
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default Object.assign({}, config, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ]
});

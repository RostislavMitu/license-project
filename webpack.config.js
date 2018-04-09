import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/frontend/js/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      inject: true
    })
  ]
};

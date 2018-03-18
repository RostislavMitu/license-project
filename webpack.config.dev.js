import path from 'path';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src/index'),
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
      }
    ]
  }
}

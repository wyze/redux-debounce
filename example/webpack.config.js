import path from 'path';

export default {
  devtool: 'eval',
  entry: './src/client',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },
};

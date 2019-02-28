module.exports = {
  entry: ['@babel/polyfill', __dirname + '/src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}

module.exports = {
  entry: ['@babel/polyfill', __dirname + '/src/index.js'],
  output: {
    globalObject: 'this',
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'minarai-markup-notation',
    libraryTarget: 'umd',
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

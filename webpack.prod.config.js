module.exports = {
  entry: [__dirname + '/src/index.js'],
  output: {
    globalObject: 'this',
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'minarai-markup-notation',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

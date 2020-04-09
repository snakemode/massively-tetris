const path = require('path');

module.exports = {
  mode: 'development',
  entry: { 
    index: './public-src/client.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public'),    
    library: 'train',
    libraryTarget: 'var'
  }
};
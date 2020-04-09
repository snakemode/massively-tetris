const path = require('path');

module.exports = {
  mode: 'development',
  entry: { 
    index: './src/client.ts'
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
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),    
    library: 'train',
    libraryTarget: 'var'
  }
};
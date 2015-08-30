var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

  entry: {
    main: './lib/main.js'
  },

  output: {
    path: "dist",
    filename: "bundle.js"
  },

  externals: {
    react: 'React',
    'react-router': 'ReactRouter',
    redux: 'Redux',
    moment: 'moment'
  },

  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  ts: {
    compiler: 'ntypescript'
  },

  resolve: {
    root: [
      path.resolve("node_modules"),
      path.resolve(".tmp"),
      path.resolve("assets")
    ],
    extensions: [
      '', '.js', '.jsx', '.ts', '.tsx'
    ],
    alias: {
      'react/addons': 'react'
    }
  },

  node: {
    Buffer: false
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map'
};

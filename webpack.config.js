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
    main: './src/app.js'
  },

  output: {
    library: "App",
    libraryTarget: 'umd',
    path: "dist",
    filename: "bundle.js"
  },

  externals: [
     {
       "react/addons": {
         root: "React",
         commonjs2: "react",
         commonjs: "react",
         amd: "react"
       },
     },
     {
       "react": {
         root: "React",
         commonjs2: "react",
         commonjs: "react",
         amd: "react"
       },
     }
  ],

  module: {
    loaders: [
      // { test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'source-map', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
    ]
  },

  resolve: {
    root: [
      path.resolve("node_modules"),
      path.resolve(".tmp"),
      path.resolve("assets")
    ],
    extensions: [
      '', '.js', '.jsx'
    ]
  },

  node: {
    Buffer: false
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map'
};

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    staticOptions: {
      extensions: ['html']
    },
  },
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    library: 'InflectMap',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    // Uglify seems to be incompatible with mapbox
    // https://github.com/mapbox/mapbox-gl-js/issues/4359#issuecomment-288001933
    noParse: /(mapbox-gl)\.js$/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(process.env.npm_package_version),
    }),
    new CopyWebpackPlugin([
      { 
        from: './dist/*.html',
        to: '../docs/[name].[ext]',
        toType: 'template',
      }
    ])
  ]
};

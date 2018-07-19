const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3009,
    staticOptions: {
      extensions: ['html']
    },
  },
  entry: {
    docs: './src/docs.jsx',
    main: './src/InflectMap.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 5,
          warnings: true,
          compress: false,
          output: {
            comments: false,
            beautify: false,
          },
          keep_classnames: true,
          keep_fnames: true,
          safari10: true,
        }
      })
    ]
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    // Uglify seems to be incompatible with mapbox
    // https://github.com/mapbox/mapbox-gl-js/issues/4359#issuecomment-288001933
    noParse: /(mapbox-gl)\.js$/,
    rules: [
      {
        test: /\.jsx?$/,
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
};

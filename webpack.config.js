var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src-docs/main.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: '/',
    filename: 'docs.bundle.js',
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    modules: ["node_modules"],
    alias: {
      vue: 'vue/dist/vue.js',
      'vue-smart-ui': path.resolve(__dirname),
    },
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './src/main.js', // entry point

  output: { // build to
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack/stats.json'}),
  ],

  resolve: {
    alias: {
      'vue': path.resolve('./node_modules/vue/dist/vue.js'),
    }
  },
}

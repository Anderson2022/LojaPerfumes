const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    target: 'web', // Explicitly set target to web
    plugins: [
      new NodePolyfillPlugin()
    ],
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "fs": false // fs is not needed in the browser
      }
    }
  }
})

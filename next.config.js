const webpack = require("webpack")
const withImages = require("next-images")
const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const withComposePlugins = require("next-compose-plugins")
const withReactPressPlugin = require("./src/reactpress/plugins/reactpress")
const withPressConfig = require("./src/reactpress/reactpress.config")

const nextConfig = {
  distDir: "build",
  assetPrefix: withPressConfig.assetPrefix,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
}

module.exports =
  withComposePlugins(
    [withCSS, withSass, withReactPressPlugin], nextConfig
  )

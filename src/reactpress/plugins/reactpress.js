const reactpressConfig = require("../reactpress.config")

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      ...nextConfig.publicRuntimeConfig,
      ...reactpressConfig
    }
  })
}

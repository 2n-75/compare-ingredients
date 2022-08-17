const path = require('path')

module.exports = {
  distDir: './.next',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.child_process = false
      config.resolve.fallback.net = false
      config.resolve.fallback.dns = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.readline = false
    }
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src/'),
      },
    }
    return config
  },
  eslint: {
    dirs: ['src'], // src配下にかける
  },
}

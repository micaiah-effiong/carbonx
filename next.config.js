const bundleAnalyzer = require('@next/bundle-analyzer')
const withOffline = require('next-pwa')

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

module.exports = withBundleAnalyzer(
  withOffline({
    pwa: {
      disable: process.env.NODE_ENV !== 'production',
      dest: 'public',
      register: false,
      skipWaiting: false,
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/graphql-language-service-parser/,
        use: [options.defaultLoaders.babel],
      })
      config.plugins.push(
        new options.webpack.IgnorePlugin({
          resourceRegExp: /\.html$/,
          contextRegExp: /node_modules/,
        })
      )
      config.plugins.push(
        new options.webpack.IgnorePlugin({
          resourceRegExp: /\.css$/,
          contextRegExp: /node_modules\/codemirror\/mode/,
        })
      )

      return config
    },
  })
)

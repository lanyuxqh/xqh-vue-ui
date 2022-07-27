var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    autoWatch: true,
    webpack: webpackConfig,
    browsers: ['ChromeHeadless'],

    reporters: ['spec'],
    // coverageReporter: {
    //   dir: './coverage',
    //   reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    // }
  })
}

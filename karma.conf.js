// Karma configuration
// Generated on Sat Nov 30 2013 16:00:21 GMT+0100 (Västeuropa, normaltid)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'assets',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'js/libs/backbone/**/*.js', included: false},
      {pattern: 'js/libs/**/*.js', included: false},
      {pattern: 'js/models/**/*.js', included: false},
      {pattern: 'js/libs/jasmine-1.3.1/**/*.js', included: false},
      {pattern: 'js/routers/**/*.js', included: false},
      {pattern: 'js/spec/models/**/*Spec.js', included: false},
      {pattern: 'js/views/**/*.js', included: false},
      'js/spec/main-test.js'
    ],


    // list of files to exclude
    exclude: [
      'js/main.js',
      'js/spec/specRunner.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    preprocessors: { 'js/models/command.js': ['coverage'] },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

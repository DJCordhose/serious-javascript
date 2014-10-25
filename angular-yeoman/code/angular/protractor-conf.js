// http://stackoverflow.com/questions/19066747/integrating-protractor-for-e2e-testing-with-yeoman-in-grunt-file-for-angular-j

exports.config = {
//  allScriptsTimeout: 11000,

  specs: [
    'e2e-test/test-demo.js',
//      'test/e2e/test-angular.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9000'

//  framework: 'jasmine',

//  jasmineNodeOpts: {
//    defaultTimeoutInterval: 30000
//  }
};

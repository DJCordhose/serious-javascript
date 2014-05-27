// http://stackoverflow.com/questions/19066747/integrating-protractor-for-e2e-testing-with-yeoman-in-grunt-file-for-angular-j

exports.config = {
//  allScriptsTimeout: 11000,

  specs: [
    'test/e2e/test-demo.js'
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

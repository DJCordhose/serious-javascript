// mocha test.js
var assert = require('assert'), // node core
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google', function() {
    var driver;
    test.before(function() {
        driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

    });
    test.after(function() {
        driver.quit();
    });
    test.it('should display', function() {
        driver.get('http://www.google.com');
        driver.getTitle().then(function (title) {
            assert.equal(title, 'Google');
            console.log(title);
        });
    });
});
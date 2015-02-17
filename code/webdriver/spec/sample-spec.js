// jasmine-node spec
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe("Google", function () {

    beforeEach(function () {
    });

    it("should work", function () {
        driver.get('http://www.google.com');
        driver.wait(function () {
            return driver.getTitle().then(function (title) {
                return title === 'Google';
            });
        }, 1000);

        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver');
        searchBox.getAttribute('value').then(function(value) {
            expect(value).toEqual('webdriver');
        });

        driver.quit();

    });

});
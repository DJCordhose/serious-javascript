var webdriver = require('selenium-webdriver'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer('selenium-server-standalone-2.42.2.jar', {
    port: 4444
});
server.start();
var url = server.address();

var driver = new webdriver.Builder().
    usingServer(url).
//    withCapabilities(webdriver.Capabilities.chrome()).
//    withCapabilities(webdriver.Capabilities.firefox()).
    withCapabilities(webdriver.Capabilities.phantomjs()).
    build();

driver.get('http://www.google.com');
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'Google';
    });
}, 1000);
driver.getTitle().then(function (title) {
    console.log(title);
});

driver.quit();
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://www.google.com');
driver.getTitle().then(function (title) {
    console.log(title);
});
driver.quit();

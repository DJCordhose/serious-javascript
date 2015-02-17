var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
//    withCapabilities(webdriver.Capabilities.firefox()).
    build();

driver.get('http://www.google.com');
driver.wait(function () {
    return driver.getTitle().then(function (title) {
        return title === 'Google';
    });
}, 1000);
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
//    driver.findElement(webdriver.By.name('btnI')).click();
//driver.findElement(webdriver.By.name('btnK')).click();
//driver.wait(function() {
//    return driver.getTitle().then(function(title) {
//        return title === 'webdriver - Google Search';
//    });
//}, 1000);
driver.quit();

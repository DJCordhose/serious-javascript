// mocha calculator-test.js
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

var url = 'http://localhost:63342/javascript-training-modules/web-applications/code/3-vanilla-decoupled/index.html';

driver.get(url);
driver.wait(function () {
    return driver.getTitle().then(function (title) {
        return title === 'Mortgage Calculator';
    });
}, 1000);
var elementPromise = driver.findElement(webdriver.By.id('price'));
console.log(elementPromise instanceof webdriver.promise.Promise);
// => true
console.log(elementPromise instanceof webdriver.WebElement);
// => true

// aus WebElement
elementPromise.sendKeys(200000);
// aus WebElement
driver.findElement(webdriver.By.className('btn-primary')).click();
driver.quit();

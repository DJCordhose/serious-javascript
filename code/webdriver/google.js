// > mocha test.js
// to generate JUnit XML
// > mocha --reporter xunit test.js
var assert =
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

function screenshot(name) {
    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFileSync('screenshots/'+name+'.png', image, 'base64');
        }
    );
}

var driver;
var url = 'http://127.0.0.1:4444';
    driver = new webdriver.Builder().
        usingServer(url).
        withCapabilities(webdriver.Capabilities.phantomjs()).
        build();

driver.get('http://www.google.com');
driver.wait(until.titleIs('Google'), 1000);
screenshot("out1");
driver.wait(function() {
    return driver.findElement(webdriver.By.name('q')).isDisplayed();
}, 1000);
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
screenshot("out2");
driver.findElement(webdriver.By.name('btnG')).click();
driver.getTitle().then(function (title) {
    console.log(title);
});

//driver.wait(until.titleIs('webdriver - Google-Suche'), 1000);
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google-Suche';
    });
}, 1000).then(function() {
    console.log("Yo")
});
screenshot("out3");

driver.quit();

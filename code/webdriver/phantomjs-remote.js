var webdriver = require('selenium-webdriver');

// start phantomjs in webdriver mode first to match the url given here, like e.g.
// > phantomjs --webdriver=4444
// works with phantomjs 2.x as well

var url = 'http://127.0.0.1:4444';

var driver = new webdriver.Builder().
    usingServer(url).
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
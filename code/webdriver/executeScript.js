var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://www.google.com');
driver.getTitle().then(function (title) {
    console.log("Title by getTitle: "+ title);
});
driver.executeScript("return document.title").then(function (title) {
    console.log("Title by execute Script String: "+ title);
});
driver.executeScript(function() {
    return document.title;
}).then(function (title) {
    console.log("Title by execute Script function: "+ title);
});

driver.executeScript(function() {
    return window.google.timers;
}).then(function (timers) {
    console.log("Google timers: "+ timers);
});


driver.quit();

var seleniumwebdriver = require('selenium-webdriver');

function CustomWorld() {
    this.driver = new seleniumwebdriver.Builder()
                    .forBrowser('chrome')
                    .build();
}

module.exports = function(){
    this.world = customWorld;
    this.setDefaultTimeout(30 * 1000);
}
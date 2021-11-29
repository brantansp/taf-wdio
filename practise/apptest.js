const { WebElement } = require("selenium-webdriver");
const {Builder, By, Key, until} = require("selenium-webdriver")
require('chromedriver');

async function main () {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.manage().window().maximize();

    const search_bar = driver.findElement(By.name("q"));

    await driver.wait(until.elementIsVisible(search_bar),1000);

    await search_bar.sendKeys("Selenium", Key.RETURN);

    await driver.close();
    await driver.quit();
}

main()
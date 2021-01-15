const {Builder, By, Key, util} = require("selenium-webdriver")

async function main () {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.manage().window().maximize();
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);
    await driver.close();
    await driver.quit();
}

main()
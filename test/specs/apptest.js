const chaiassert = require('chai').expect;

const globalTimeout = 15000;

describe ('Pando login test', async () => {

    it ('Login with valid credentials', async () => {

        await navigateToUrl("https://automation.pandostaging.in");

        await typeInText("//label[text()='User name:']/preceding-sibling::input", 'pandoautomation@gmail.com');

        await typeInText("//label[text()='Password:']/preceding-sibling::input", 'test@1234');

        await click("//button[contains(text(),'Log in')]");

        await waitForElementToBeDisplayed ("//main[@class='container-fluid main-content']", globalTimeout);

        chaiassert(await getText("//h1")).to.equals("Automation - Indents")

        //await browser.saveScreenshot("successfulLogin.png")
    })
})

async function assertThatElementIsDisplayed(){
    await $(elementLocator).isDisplayed();
}

async function navigateToUrl (urlToOpen) {
    await browser.url(urlToOpen);
}

async function click (elementLocator) {
    await waitForElementToBeDisplayed(elementLocator, globalTimeout);
    await $(elementLocator).click();
}

async function typeInText (elementLocator, textToBeTyped) {
    await waitForElementToBeDisplayed(elementLocator, globalTimeout);
    await $(elementLocator).setValue(textToBeTyped);
}

async function waitForElementToBeDisplayed (elementLocator, timeout) {
    await browser.waitUntil( async () => ( await $(elementLocator).isDisplayed() === true), {
        timeout:timeout,
        timeoutMsg:"Element is not displayed in the page even after wait time"
    });
}

async function getText(elementLocator){
    await waitForElementToBeDisplayed(elementLocator, globalTimeout);
    return $(elementLocator).getText();
}
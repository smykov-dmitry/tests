var loginPage = require('./LoginPage');

describe('Login page', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.get();
    });
    it('trying login with empty login and empty password', async function() {
        await loginPage.setUserName('');
        await loginPage.setPassword('');
        await loginPage.clickDisabledButton();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/');
    });
    it('trying login with empty login and not empty password', async function() {
        await loginPage.setUserName('');
        await loginPage.setPassword('password');
        await loginPage.clickDisabledButton();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/');
        await loginPage.passwordField.clear();
    });
    it('trying login with not empty login and empty password', async function() {
        await loginPage.setUserName('user');
        await loginPage.setPassword('');
        await loginPage.clickDisabledButton();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/');
        await loginPage.nameField.clear();
    });
    it('trying login with correct login and incorrect password', async function() {
        await loginPage.setUserName('dmitry.smykov');
        await loginPage.setPassword('password');
        await loginPage.clickEnabledButton();
        await browser.sleep(2000);
        await expect(loginPage.loginFailed.isDisplayed()).toBe(true);
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/');
        await loginPage.nameField.clear();
        await loginPage.passwordField.clear();
    });
    it('trying login with incorrect login and correct password', async function() {
        await loginPage.setUserName('user');
        await loginPage.setPassword('16Divani07');
        await loginPage.clickEnabledButton();
        await browser.sleep(2000);
        await expect(loginPage.loginFailed.isDisplayed()).toBe(true);
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/');
        await loginPage.nameField.clear();
        await loginPage.passwordField.clear();
    });
    it('trying login with correct login and correct password', async function() {
        await loginPage.setUserName('dmitry.smykov');
        await loginPage.setPassword('16Divani07');
        await loginPage.clickEnabledButton();
        await browser.sleep(3000);
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/impersonate');
    });
});
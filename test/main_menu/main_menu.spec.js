var loginPage = require('../login/LoginPage');
var mainMenu = require('../main_menu/main_menu.js');

describe('Main menu', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.login('Dmitry', 'P@n@son1c');
    });
    it('checking transition to Households page', async function() {
        await mainMenu.openMenu();
        await mainMenu.householdsItem.click();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/households');
    });
    it('checking transition to Accounts page', async function() {
        await mainMenu.openMenu();
        await mainMenu.accountsItem.click();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/accounts');
    });
    it('checking transition to Investments page', async function() {
        await mainMenu.openMenu();
        await mainMenu.investmentsItem.click();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/investments');
    });
    it('checking transition to Reports page', async function() {
        await mainMenu.openMenu();
        await mainMenu.reportsItem.click();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/reports');
    });
    it('checking transition to Investments page', async function() {
        await mainMenu.openMenu();
        await mainMenu.documentCenterItem.click();
        await expect(browser.getCurrentUrl()).toEqual('https://radaralphaqa.assetbook.net/#/documentcenter');
    });
});
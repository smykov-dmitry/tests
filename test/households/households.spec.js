var loginPage = require('../login/LoginPage');
var mainMenu = require('../main_menu/main_menu.js');
var households = require('../households/households.js');
var header = require('../header/header.js');

describe('Household page', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.impersonateLogin('Dmitry', 'P@n@son1c');
        await mainMenu.goToHouseholds();
    });
    it('checking displaying logo on Households page', async function() {
        await expect(header.logo.isDisplayed()).toBe(true);
    });
    it('checking displaying search input on Households page', async function() {
        await expect(header.search.isDisplayed()).toBe(true);
    });
    it('checking displaying "Add New Household" button on Households page', async function() {
        await expect(households.addNewHouseholdButton.isDisplayed()).toBe(true);
    });
    it('checking displaying "Add/Edit Views" dropdown on Households page', async function() {
        await expect(households.addEditViewsDropdown.isDisplayed()).toBe(true);
    });
    it('checking dropping the list of Views on Households page', async function() {
        await households.clickAddEditViewsDropdown();
        await expect(households.viewItem.isDisplayed()).toBe(true);
        await households.clickAddEditViewsDropdown();
    });
    it('checking displaying Username icon on Households page', async function() {
        await expect(header.userIcon.isDisplayed()).toBe(true);
    });
    it('checking opening User dropdown on Households page', async function() {
        await households.clickUserDropdown();
        //await expect(households.userItem.isDisplayed()).toBe(true);
        await households.clickUserDropdown();
        await browser.sleep(3000);
    });
});
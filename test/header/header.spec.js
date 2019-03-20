var loginPage = require('../login/LoginPage');
var header = require('../header/header.js');
var mainMenu = require('../main_menu/main_menu.js');

describe('Header', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.impersonateLogin('Dmitry', 'P@n@son1c');
    });
    it('checking main menu icon displaying', async function() {
        await expect(mainMenu.menuIcon.isDisplayed()).toBe(true);
    });
    it('checking logo displaying', async function() {
        await expect(header.logo.isDisplayed()).toBe(true);
    });
    it('checking search input displaying', async function() {
        await expect(header.search.isDisplayed()).toBe(true);
    });
    it('checking user icon displaying', async function() {
        await expect(header.userIcon.isDisplayed()).toBe(true);
    });
});
var loginPage = require('../login/LoginPage');
var dashboardPage = require('../dashboard/dashboard.js');

describe('Dashboard page', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.impersonateLogin('Dmitry', 'P@n@son1c');
    });
    it('checking left chart displaying', async function() {
        await expect(dashboardPage.chartLeft.isDisplayed()).toBe(true);
    });
    it('checking right chart displaying', async function() {
        await expect(dashboardPage.chartRight.isDisplayed()).toBe(true);
    });
});
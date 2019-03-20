var loginPage = require('../login/LoginPage');
var search = require('../search/search.js');

describe('Search page', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await loginPage.login('dmitry.smykov', '16Divani07');
    });
    it('checking search page opening', async function() {
        await search.goSearch('cvx');
    });
});
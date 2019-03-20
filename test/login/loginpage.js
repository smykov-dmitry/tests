var LoginPage = function() {
    this.nameField = element(by.id('username'));
    this.passwordField = element(by.id('password'));
    this.enButton = element(by.css('div[class="au-target login__button"]'));
    this.loginButton = element(by.css('div[class="login__flex-row"]'));
    this.loginFailed = element(by.css('div[class="login__text-red"]'));
    this.dbSelector = element(by.xpath('//div/main/section/impersonate-search-result[12]/div[1]/header/span'));

    this.get = async function() {
        await browser.driver.manage().window().maximize();
        await browser.get('https://radaralphaqa.assetbook.net');
    }
    this.setUserName = async function(name) {
        await this.nameField.sendKeys(name);
    }
    this.setPassword = async function(password) {
        await this.passwordField.sendKeys(password);
    }
    this.clickDisabledButton = async function() {
        await this.loginButton.click();
    }
    this.clickEnabledButton = async function() {
        await this.enButton.click();
    }
    this.login = async function(name, password) {
        await browser.driver.manage().window().maximize();
        await browser.get('https://radaralphaqa.assetbook.net');
        await this.nameField.sendKeys(name);
        await this.passwordField.sendKeys(password);
        await this.enButton.click();
        await browser.sleep(7000);
        await this.dbSelector.click();
        await browser.sleep(7000);
    }
    this.impersonateLogin = async function(name, password) {
        await browser.driver.manage().window().maximize();
        await browser.get('https://radaralphaqa.assetbook.net');
        await this.nameField.sendKeys(name);
        await this.passwordField.sendKeys(password);
        await this.enButton.click();
        await browser.sleep(7000);
    }
};
module.exports = new LoginPage();
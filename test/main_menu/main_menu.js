var MainMenu = function() {
    this.menuIcon = element(by.css('i[class="fa fa-bars navicon"]'));
    this.dashboardItem = element(by.css('a[data-text="Dashboard"]'));
    this.householdsItem = element(by.css('a[data-text="Households"]'));
    this.accountsItem = element(by.css('a[data-text="Accounts"]'));
    this.investmentsItem = element(by.css('a[data-text="Investments"]'));
    this.reportsItem = element(by.css('a[data-text="Reports"]'));
    this.documentCenterItem = element(by.css('a[data-text="Document Center"]'));

    this.openMenu = async function() {
        await this.menuIcon.click();
    }
    this.goToDashboard = async function() {
        await this.openMenu();
        await this.dashboardItem.click();
    }
    this.goToHouseholds = async function() {
        await this.openMenu();
        await this.householdsItem.click();
        await browser.sleep(3000);
    }
    this.goToAccounts = async function() {
        await this.openMenu();
        await this.accountsItem.click();
    }
    this.goToInvestments = async function() {
        await this.openMenu();
        await this.investmentsItem.click();
    }
    this.goToReports = async function() {
        await this.openMenu();
        await this.reportsItem.click();
    }
    this.goToDocumentCenter = async function() {
        await this.openMenu();
        await this.documentCenterItem.click();
    }
};
module.exports = new MainMenu();
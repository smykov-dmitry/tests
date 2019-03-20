var HouseholdsPage = function() {
    this.addNewHouseholdButton = element(by.css('button[class="au-target ab-button-medium__plus ab-button-primary"]'));
    this.addEditViewsDropdown = element(by.css('div[class="ab-custom-view__dropdown au-target"]'));
    this.viewItem = element(by.css('div[title="Test QA"]'));

    this.clickAddEditViewsDropdown = async function() {
        await this.addEditViewsDropdown.click();
    }
    this.clickUserDropdown = async function() {
        await this.userIcon.click();
    }
};
module.exports = new HouseholdsPage();
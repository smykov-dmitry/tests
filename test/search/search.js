var Search = function() {
    this.search = element(by.id('ab-search'));
    this.xButton = element(by.css('span[class="ab-search__results__hide-results au-target"]'));

    this.goSearch = async function(keyword) {
        await this.search.sendKeys(keyword);
        await this.search.sendKeys(protractor.Key.ENTER);
    }
    this.closeSearch = async function() {
        await this.search.xButton.click();
    }
};
module.exports = new Search();
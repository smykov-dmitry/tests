var Header = function() {
    this.logo = element(by.css('img[src="/05c3211b84169083c7dfc1587edce9a9.svg"]'));
    this.search = element(by.id('ab-search'));
    this.userIcon = element(by.xpath('//div[@class="nav-bar__user-panel"]//span[@class="user-panel__user-first-later"]'));
};
module.exports = new Header();
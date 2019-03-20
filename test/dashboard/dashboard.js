var DashboardPage = function() {
    this.chartLeft = element(by.css('section[class="dashboard__chart-wrapper__left"]'));
    this.chartRight = element(by.css('section[class="dashboard__chart-wrapper__right"]'));
};
module.exports = new DashboardPage();
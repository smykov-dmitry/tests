exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        loginpage: 'test/login/loginpage.spec.js',
        dashboard: 'test/dashboard/dashboard.spec.js',
        header: 'test/header/header.spec.js',
        search: 'test/search/search.spec.js',
        mainmenu: 'test/main_menu/main_menu.spec.js',
        households: 'test/households/households.spec.js'
    },
    capabilities: {
        browserName: 'chrome'
    },
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    }
}
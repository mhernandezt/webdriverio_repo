const internetPage = require('../pages/internet.page');

describe("Switch window", function() {
    it('Should switch to the next window', () => {
        browser.url(`${browser.options.baseUrl}/windows`);
        internetPage.clickHereLink();
        //browser.switchWindow(`${browser.options.baseUrl}/windows/new`);
        browser.switchWindow('New Window');

        assert.equal(true, internetPage.h3Header.isExisting());
        assert.equal(true, internetPage.h3Header.isDisplayed());
        assert.equal('New Window', internetPage.h3Header.getText());
    });
});
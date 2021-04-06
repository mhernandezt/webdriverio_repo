const internetPage = require('../pages/internet.page');

describe("Switch to Iframe", function() {
    it('should switch to iframe', () => {
        browser.url(`${browser.options.baseUrl}/iframe`);
        internetPage.h3Header.waitForDisplayed();
        internetPage.iframe.waitForDisplayed();
        browser.switchToFrame(internetPage.iframe);
        internetPage.sendTextToBody('Send text here');
        assert.equal('Send text here', internetPage.iframeBody.getText());
        browser.pause(3000);
    });
});
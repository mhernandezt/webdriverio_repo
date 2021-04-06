const internetPage = require('../pages/internet.page');

describe('Scroll to element', function() {
    it.only('Should scroll to page footer', () => {
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.scrollToPagefooter();
        assert.equal(false, internetPage.pageFooter.isDisplayedInViewport());
        browser.pause(5000);
    });

    it('Should scroll into view', () => { 
        browser.url('/');
        internetPage.pageFooter.scrollIntoView();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
        browser.pause(5000);
    });
});
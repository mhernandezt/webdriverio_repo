const internetPage = require('../pages/internet.page');

describe('Wait until', function() {
    it('should wait until the button text changes to add', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickPageButton();
        browser.waitUntil(
            () => internetPage.pageButton.getText() === 'Add',
            {
                timeout: 6000, 
                timeoutMsg: 'Expect button text to change'
            }
        );
        assert.equal('Add', internetPage.pageButton.getText());
    });

    it('should wait until the button text changes to remove', () => {
        internetPage.clickPageButton();
        browser.waitUntil(
            () => internetPage.pageButton.getText() === 'Remove',
            {
                timeout: 6000, 
                timeoutMsg: 'Expect button text to change'
            }
        );
        assert.equal('Remove', internetPage.pageButton.getText());
    });
});
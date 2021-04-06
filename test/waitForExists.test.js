const internetPage = require('../pages/internet.page');

describe('Wait for exist', function() {
    const option = 1;
    it('should wait until the delete button', () => {
        browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
        internetPage.clickExampleButton();
        internetPage.deleteButton(option).waitForExist();
        assert.equal(true, internetPage.deleteButton(option).isExisting());
        browser.pause(3000);
    });

    it('should wait for the delete button to no exist', () => {
        internetPage.clickDeleteButton(option);
        internetPage.deleteButton(option).waitForExist({ timeout: 500, reverse: true });
        assert.equal(false, internetPage.deleteButton(option).isExisting());
        browser.pause(3000);
    });
});
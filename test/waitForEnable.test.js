const internetPage = require('../pages/internet.page');

describe('Wait for enabled', function() {
    it('should wait for the input field to be enable', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled({ timeout: 6000 });
        assert.equal(true, internetPage.inputEnabledField.isEnabled());
        assert.equal("It's enabled!", internetPage.inputText.getText());
    });

    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton();
        internetPage.inputEnabledField.waitForEnabled({ timeout: 6000, reverse: true });
        assert.equal(false, internetPage.inputEnabledField.isEnabled());
        assert.equal("It's disabled!", internetPage.inputText.getText());
    });
});
const internetPage = require('../pages/internet.page');

describe('Javascript Alerts', function() {
    it('should get text of alert', () => {
        const option = 1;
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        internetPage.clickJavascriptAlertButton(option);
        assert.equal('I am a JS Alert', browser.getAlertText());
    });

    it('should accept alert', () => {
        browser.acceptAlert();
        assert.equal('You successfully clicked an alert', internetPage.result.getText());
    });

    it('should dismiss alert', () => {
        const option = 2;
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        internetPage.clickJavascriptAlertButton(option);
        browser.dismissAlert();
        assert.equal('You clicked: Cancel', internetPage.result.getText());
    });

    it('should send text to the alert', () => {
        const option = 3;
        let text = "hi world";
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        internetPage.clickJavascriptAlertButton(option);
        browser.sendAlertText(text);
        browser.acceptAlert();
        assert.equal('You entered: ' + text, internetPage.result.getText());
        browser.pause(3000);
    });
});
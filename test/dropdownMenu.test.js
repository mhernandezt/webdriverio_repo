const internetPage = require('../pages/internet.page');

describe('Select an option from a dropdown list', function() {
    it('should select option 1', () => {
        const option = 3;
        browser.url(`${browser.options.baseUrl}/dropdown`);
        internetPage.clickDropdownMenu();
        internetPage.clickDropdownMenuOption(option);
        assert.equal(true, internetPage.dropdownMenuOption(option).isSelected());
        browser.debug();
    });
});
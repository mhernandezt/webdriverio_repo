const internetPage = require('../../pages/internet.page');
const loginData = require('../../data/loginData');

describe('Drag and drop', function() {
    it.skip('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`);
        internetPage.dragColumnAToColumnB();
        browser.pause(3000);
        assert.equal('A', internetPage.columnBHeader.getText());
    });

    it('should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html');
        
        const draggable = $('#draggable');
        const droppable = $('#droppable');
        draggable.waitForDisplayed();
        draggable.dragAndDrop(droppable);
        console.log(loginData.userName);

        assert.equal('Dropped!', droppable.getText());
    });

    it.skip('should change', () => {

    });

    it.skip('should change 2do commit', () => {

    });

    it.skip('should change 6th commit', () => {

    });
});
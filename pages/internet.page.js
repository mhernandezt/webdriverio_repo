class Internet {
    get pageHeader() { return $('.heading'); }
    get pageFooter() { return $('#page-footer'); }
    get hereLink() { return $('.example a'); }
    get h3Header() { return $('h3'); }

    get iframeBody() { return $('#tinymce'); }
    get iframe() { return $('#mce_0_ifr'); }

    get columnA() { return $('#column-a'); }
    get columnB() { return $('#column-b'); }
    get columnAHeader() { return $('#column-a header'); }
    get columnBHeader() { return $('#column-b header'); }

    get dropdownMenu() { return $('#dropdown'); }
    get result() { return $('.example #result'); }

    get enabledButton() { return $('#input-example button'); }
    get inputEnabledField() { return $('#input-example input'); }
    get inputText() { return $('#input-example #message'); }

    get exampleButton() { return $('.example button'); }
    get pageButton() { return $('#checkbox-example button'); }

    deleteButton(index) { return $(`#elements button:nth-child(${index})`)}

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`); }
    dropdownMenuOption(index) { return $(`#dropdown option:nth-child(${index})`); }
    

    clickPageButton() {
        this.pageButton.waitForDisplayed();
        this.pageButton.click();
    }

    clickExampleButton() {
        this.exampleButton.waitForDisplayed();
        this.exampleButton.click();
    }

    clickDeleteButton(index) {
        this.deleteButton(index).waitForDisplayed();
        this.deleteButton(index).click();
    }

    /**
     * Click the Enable/Disable button
     */
    clickEnableButton() {
        this.enabledButton.waitForDisplayed();
        this.enabledButton.click();
    }

    /**
     * Click the specified javascript alert
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed();
        this.javascriptAlertButton(index).click();
    }

    clickDropdownMenu() {
        this.dropdownMenu.waitForDisplayed();
        this.dropdownMenu.click();
    }

    clickDropdownMenuOption(index) {
        this.dropdownMenuOption(index).waitForDisplayed();
        this.dropdownMenuOption(index).click();
    }

    /**
     * Drag box A to box B
     */
    dragColumnAToColumnB() {
        this.columnA.waitForDisplayed();
        this.columnA.dragAndDrop(this.columnB);
    }

    /**
     * Enter text in the frame
     * @param {String} text the text to be entered
     */
    sendTextToBody(text) {
        this.iframeBody.waitForDisplayed();
        this.iframeBody.clearValue();
        this.iframeBody.click();
        this.iframeBody.keys(text);
    }

    scrollToPagefooter() {
        this.pageFooter.moveTo({ xOffset: 0, yOffset: 10 });
    }

    clickHereLink() {
        this.hereLink.waitForDisplayed();
        this.hereLink.click();
    }

}

module.exports = new Internet();
module.exports = {
    beforeEach: browser => {
        yPage = browser.page.yoodlizePageObject()
        yPage.navigate()
    },
    after: browser => {
        browser.end()
    },
}
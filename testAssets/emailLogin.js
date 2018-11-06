module.exports = (pageObject, formInfo) => {
    pageObject
        .waitForElementVisible('@emailInput', 1000)
        .clearValue('@emailInput')
        .setValue('@emailInput', formInfo.email)
        .clearValue('@passwordInput')
        .setValue('@passwordInput', formInfo.password)
        .click('@loginButton')
        .waitForElementVisible('@userIcon', 1000)
}
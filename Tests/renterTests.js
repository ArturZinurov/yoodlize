var yPage = {}
var categories = require('../testAssets/yoodlizeTestData')

module.exports = {
    beforeEach: browser => {
        yPage = browser.page.yoodlizePageObject()
        yPage.navigate()
    },
    after: browser => {
        browser.end()
    },

    // Renter Use Cases
    'Items Appear on Home Page': browser => {
        yPage.getLocationInView('@item')

            .assert.elementPresent('@item')

    },
    'Click on Item from Home Page': browser => {
        yPage
            .click('@item')
            .waitForElementVisible('@itemName', 10000)

    },
    'Click "See All" next to Category': browser => {
        yPage
            .click('@seeAllTools')

    },
    'Click Category Circle': browser => {
        yPage
            .waitForElementVisible(categories.circleCategories[0], 100000)
            .click(categories.circleCategories[0])


    },
    'Search for Item from Home Page': browser => {
        yPage
            .setValue('@searchField', 'Shovel' + yPage.api.Keys.ENTER)
            //.click('@searchBtn')
            .waitForElementVisible('@results', 1000)

    },
    'Search from Item from Other Pages': browser => {
        yPage
            .click('@seeAllTools')
            .setValue('@searchField', 'Shovel')

    },
    'Search Filters: Category': browser => {
        yPage
            .click('@browse')
        yPage
            .click(categories.searchFillterCtegories[5])
            .waitForElementVisible('@item', 5000)


    },
    'Search Filters: Date': browser => {

    },
    'Search Filters: Price': browser => {

    },
    'Search Filters: Sort': browser => {

    },
    'Search Filters: Map': browser => {

    },
    'Item Display Details': browser => {

    },
    'Item View: Map': browser => {

    },
    'Item View: Favorite and Item': browser => {

    },
    'Request Item': browser => {

    },
    'Request Item During Blackout Dates': browser => {

    },
    'Request Item Confirmation': browser => {

    },
    'Sign Up with Valid Email': browser => {
        yPage
            .click('#sign-up')
            .click('#sign-up-with-email')
        fillForm('name', 'last name', 'email', 'password', 'birthday')
        yPage
            .click('#sign-up-button')
            .verifySomethingPresent()
    },
    'Sign Up with Invalid Email': browser => {

    },
    'Sign Up with Facebook': browser => {
        yPage
            .click('#sign-up')
            .click('#log-in-with-facebook')
            .click('#continue-as-user')
            .verifySomethingPresent()
    },
    'Sign Up with Gmail': browser => {
        yPage
            .click('#sign-up')
            .click('#log-in-with-google')
            .click('#desired-email')
            .verifySomethingPresent()
    },
    'Login with Valid Credentials': browser => {
        yPage
            .setValue('#email')
            .setValue('#password')
            .click('#login')
            .verifySomethingPresent('logged in') // ...not sure how to do this
    },
    'Login with Invalid Credentials': browser => {
        yPage
            .setValue('#email')
            .setValue('#invalid-password')
            .verifySomethingPresent('#error-message')
    },
    'Logout': browser => {
        yPage
            .click('#user-icon')
            .click('#logout')
            .verifySomethingPresent('#login-button')
    },
    'List an Item while Logged Out': browser => {
        yPage
            .click('#list-product')
            .verifySomethingPresent('#login-page')
    },
    'List an Item while Logged In: Guide Me': browser => {
        yPage
            .click('#list-product')
            .click('#guide-me')
            .waitForElementVisible('#step-1')
        fillForm('title', 'description', 'category')
        yPage
            .click('#next')
            .waitForElementVisible('#step-2')
            .click('#upload-photo')
            .click('#next')
            .waitForElementVisible('#step-3')
        fillForm('street address', 'apt', 'city', 'state', 'zip')
        yPage
            .click('#next')
            .waitForElementVisible('#step-4')
            .click('#dates')
            .click('#next')
            .waitForElementVisible('#step-5')
            .setValue('#price', '$$')
            .waitForElementVisible('#step-6')
            .setValue('#rules', 'dont do bad stuff')
            .click('#add')
            .click('#next')
            .waitForElementVisible('#my-listing-info')
            .click('#publish')
    },
    'List an Item while Logged In: I Got It': browser => {
        yPage
            .click('#list-product')
            .click('#i-got-it')
    }
}
var clickByText = require('../testAssets/clickByText')

module.exports = (pageObject, formInfo) => {
    pageObject
        .waitForElementVisible('@listProductLoggedIn', 5000)
        .click('@listProductLoggedIn')
        .click('@guideMe')
    pageObject
        .clearValue('@step1Title')
        .setValue('@step1Title', formInfo.title)
        .clearValue('@step1Description')
        .setValue('@step1Description', formInfo.description)
        .click('@step1CategorySelect')
        .click(`option[value="${formInfo.category}"]`)
    pageObject
        // .click('step2UploadPhotos')
        // .setValue('@uploadPhoto', require('/users/madelinethomas/Documents/DevMtn/my-stuff/yoodlize-test-photos').resolve(__dirname + '/dog-backpack.jpg'))
        .click('@step2Next')
        .clearValue('@step3Address1')
        .setValue('@step3Address1', formInfo.address1)
        .clearValue('@step3Address2')
        .setValue('@step3Address2', formInfo.address2)
        .clearValue('@step3City')
        .setValue('@step3City', formInfo.city)
        .clearValue('@step3State')
        .setValue('@step3State', formInfo.state)
        .clearValue('@step3Zip')
        .setValue('@step3Zip', formInfo.zip)
        .click('@step3Next')
        // .waitForElementVisible('@step4Title', 1000)
}
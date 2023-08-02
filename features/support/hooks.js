const { BeforeAll, AfterAll, Before, After, Status, AfterStep } = require('@cucumber/cucumber')
const puppeteer = require('puppeteer')

const scope = require('./scope')


// ==== BeforeAll and AfterAll do not have access to test scope 'this'
// ==== Before and After do

// executed once before any test
BeforeAll(async function() {})

AfterStep(async function(testCase){
  let screenshot = await scope.page.screenshot()
  if(testCase.result.status === Status.PASSED){
    console.log(`Test '${testCase.pickle.name}': Step - passed.`)
  }
  // this.attach(screenshot, 'image/png')
})


// executed once after all tests
AfterAll(async function() {
  // Make sure the browser is closed
  if (scope.browser != null) {
    scope.browser.close()
  }
})

// executed before every test
Before(async function() {
  scope.browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    slowMo: 10,
    devtools: false,
    args:
        [
            '--start-maximized',
            '--window-size=1920,1080'
        ]
});
scope.page = await scope.browser.newPage();
})

// executed after every test
After(async function(testCase) {
  // attach a screenshot 
  if (testCase.result.status === Status.FAILED || testCase.result.status === Status.PASSED) {
    if (scope.page != null) {
      let screenshot = await scope.page.screenshot()
      this.attach(screenshot, 'image/png')
     
    }
  }
  if (testCase.result.status === Status.PASSED){
    console.log(`Test: '${testCase.pickle.name}' - passed!`)
  }
  if(testCase.result.status === Status.FAILED){
    console.log(`Test: '${testCase.pickle.name}' - failed...`)
  }

  if (scope.browser != null) {
    scope.browser.close()
  }
})

const {
	Given,
	When,
	Then,
} = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const LoginPage = require('../../support/pages/LoginPage');
const HomePage = require('../../support/pages/HomePage');
const SignupPage = require('../../support/pages/SignupPage');
const scope = require('../../support/scope');

let loginPage = new LoginPage(scope.page);
let homePage = new HomePage(scope.page);
let signupPage = new SignupPage(scope.page);


Then('Click on the Login text', async function () {
	await loginPage.clickOnLoginText()
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Verify User lands on Login Page', async function () {
	await loginPage.userLandOnLoginPage()
});

Then('Enter Email in Login Form', async function () {
	await loginPage.enterEmailInLoginForm()
});

Then('Enter Password in Login Form', async function () {
	await loginPage.enterPasswordInLoginForm()
});

Then('Click on Login Button', async function () {
	await loginPage.clickOnLoginButton()
});

Then('Enter Email field as blank in Login Form', async function () {
	await loginPage.enterBlankEmailLoginForm()
});

Then('Enter password field as blank in Login Form', async function () {
	await loginPage.enterBlankPasswordLoginForm()
});

Then('Error text of Email must present in Login Page', async function () {
	await loginPage.helperTextEmailLoginForm()
});

Then('Error text of Password must present in Login Page', async function () {
	await loginPage.helperTextPasswordLoginForm()
});
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

Given('I open a main page', async function () {
	await loginPage.goTo();
});

When('Click on the Sign Up Button', async function () {
	await loginPage.clickSignUpButton();
});

Then('Land on Sign Up Page', async function () {
	await signupPage.clickSignUpButton();
});

Then('Enter First Name in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.enterFirstnameinSignupForm();

	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Last Name in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.enterLastNameInSignupForm();

	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Email in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.enterEmailInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Password in SignUp Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.enterPasswordInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Mobile Number in SignUp Form', async function () {
	await signupPage.enterMobileNumberInSignupForm();
});

Then('Click on Signup Submit button', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.clickOnSignupSubmitBtn();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter First Name as blank in Signup Form', async function () {
	await signupPage.enterBlankFirstNameInSignupForm();
});

Then('Enter Last Name as blank in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.enterBlankLastNameInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Email as blank in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));

	await signupPage.enterBlankEmailInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Password as blank in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));

	await signupPage.enterBlankPasswordInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Enter Mobile Number as blank in Signup Form', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));

	await signupPage.enterBlankMobileNumberInSignupForm();
	await new Promise(resolve => setTimeout(resolve, 1000));
});

Then('Error text must present for First Name', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.helperTextFirstNameSignup();
});

Then('Error text must present for Last Name', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.helperTextlastNameSignup();
});

Then('Error text must present for Email', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.helperTextEmailSignup();
});

Then('Error text must present for Password', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.helperTextPasswordSignup();
});

Then('Error text must present for Mobile Number', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await signupPage.helperTextMobileNumberSignup();
});

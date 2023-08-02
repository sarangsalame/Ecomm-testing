const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
// const LoginPage = require('../../support/pages/LoginPage');
// const HomePage = require('../../support/pages/HomePage');
// const SignupPage = require('../../support/pages/SignupPage');
const ProductPage = require('../../support/pages/ProductPage');
const scope = require('../../support/scope');

// let loginPage = new LoginPage(scope.page);
// let homePage = new HomePage(scope.page);
// let signupPage = new SignupPage(scope.page);
let productPage = new ProductPage(scope.page);

Then(
	'User can click on the product and land on product details page',
	async function () {
		await productPage.clickOnTheProduct();
	}
);

Then('User Click on Add Product Button', async function () {
	await productPage.clickOnAddProductButton();
});

Then('User clicks on Go To Cart button', async function () {
	await productPage.clickOnGoToCartButton();
});

Then('User clicks on Place Order Button', async function () {
	await productPage.clickOnPlaceOrderButton();
});

Then('Enter Address in the address field', async function () {
	await productPage.enterAddress();
});

Then('Click on Order Place button', async function () {
	await productPage.clickOnOrderPlaceButton();
});

Then('Click the Order Status button', async function () {
	await productPage.clickOnOrderStatusButton();
});

const {
	Given,
	When,
	Then,
	Before,
	After,
	AfterAll,
} = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const HomePage = require('../../support/pages/HomePage');
const scope = require('../../support/scope');

let homePage = new HomePage(scope.page);

Then('I validate redirection to the main page', async function () {
	await new Promise(resolve => setTimeout(resolve, 1000));
	await homePage.veifyLandOnHomePage();
});

Then('Verify User landed on Home Page', async function () {
	await homePage.veifyLandOnHomePage();
});

Then('Click on the hamburger menu', async function () {
	await homePage.clickHamburgerMenu();
});

Then('Click Home on the hamburger menu', async function () {
	await homePage.clickHomeOnHamburgerMenu();
});

Then('Click on Logout button', async function () {
	await homePage.clickLogoutButton();
});

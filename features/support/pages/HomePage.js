const expect = require('chai').expect;
const scope = require('../scope');
const BasePo = require('./base.po');

class HomePage extends BasePo{
	async goTo() {
		await scope.page.goto('http://localhost:3000');
		await scope.page.waitForSelector('#home_heading');
	}

	async clickHamburgerMenu() {
        await new Promise(resolve => setTimeout(resolve, 2000));
		await scope.page.click('#hamburger_icon_navbar');
	}

	async clickHomeOnHamburgerMenu() {
		await scope.page.click('#Homer');
		await scope.page.waitForSelector('#home_heading');
	}

	async clickLogoutButton() {
		await scope.page.click('#log_out_btn');
	}

	async veifyLandOnHomePage() {
		let mainUrl = await scope.page.url();
		expect(mainUrl).to.contain('/localhost');
		console.log('User Reach on home page');
	}

	
}

module.exports = HomePage;

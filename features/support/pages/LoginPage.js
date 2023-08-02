const scope = require('../scope');
const BasePo = require('./base.po');
const expect = require('chai').expect;

class LoginPage extends BasePo {
	async goTo() {
		await scope.page.goto('http://localhost:3000');
		await scope.page.waitForSelector('#sign_up_btn');
	}

	async clickSignUpButton() {
		await scope.page.click('#sign_up_btn');
		await scope.page.waitForSelector('#signup_page');
	}

	async clickOnLoginText() {
		const loginText = await scope.page.waitForSelector('#go_to_login');
		expect(loginText).to.exist;

		await new Promise(resolve => setTimeout(resolve, 2000));

		await scope.page.click('#go_to_login');
		console.log('click on login');
	}

	async userLandOnLoginPage() {
		await scope.page.waitForSelector('#login_heading');
		await new Promise(resolve => setTimeout(resolve, 1000));
		console.log('land on login page');
	}

	async enterEmailInLoginForm() {
		await scope.page.waitForSelector('#login_email');
		console.log('Email input field selected');
		await scope.page.type('#login_email', 'ramcharaasn@yopmail.com');
		await new Promise(resolve => setTimeout(resolve, 1000));
	}

	async enterPasswordInLoginForm() {
		await scope.page.waitForSelector('#login_password');
		console.log('Password input field selected');
		await scope.page.type('#login_password', 'ramcharan1');
		await new Promise(resolve => setTimeout(resolve, 1000));
	}

	async clickOnLoginButton() {
		await scope.page.waitForSelector('#login_btn');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#login_btn');
		await new Promise(resolve => setTimeout(resolve, 1000));
		console.log('login button clicked');
	}
    
	async enterBlankEmailLoginForm() {
		await scope.page.waitForSelector('#login_email');
		console.log('Email input field selected');
		await scope.page.type('#login_email', '');
		await new Promise(resolve => setTimeout(resolve, 1000));
	}

	async enterBlankPasswordLoginForm() {
		await scope.page.waitForSelector('#login_password');
		console.log('Password input field selected');
		await scope.page.type('#login_password', '');
		await new Promise(resolve => setTimeout(resolve, 1000));
	}

	async helperTextEmailLoginForm() {
		let loginEmailSelector = await scope.page.waitForSelector(
			'#login_email-helper-text'
		);
		await new Promise(resolve => setTimeout(resolve, 1000));
		const loginEmailMatch = await this.verifyTheText(
			loginEmailSelector,
			'Required'
		);
		if (loginEmailMatch) {
			console.log('Error text Present');
		}
	}

	async helperTextPasswordLoginForm() {
		let loginPassSelector = await scope.page.waitForSelector(
			'#login_password-helper-text'
		);
		await new Promise(resolve => setTimeout(resolve, 1000));
		const loginEmailMatch = await this.verifyTheText(
			loginPassSelector,
			'Required'
		);
		if (loginEmailMatch) {
			console.log('Error text Present');
		}
	}
}

module.exports = LoginPage;

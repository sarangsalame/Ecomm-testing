const scope = require('../scope');
const BasePo = require('./base.po');
const expect = require('chai').expect;

class SignupPage extends BasePo {
	async goTo() {
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.goto('http://localhost:3000');
		await scope.page.waitForSelector('#sign_up_btn');
	}

	async clickSignUpButton() {
		await scope.page.waitForSelector('#sign_up_btn');
		await scope.page.click('#sign_up_btn');
		await scope.page.waitForSelector('#signup_page');
		console.log('clicked on the signup button');
	}

	async enterFirstnameinSignupForm() {
		const firstNameInput = await scope.page.$('#sign_up_first_name');
		expect(firstNameInput).to.exist;

		console.log('First name input field selected');

		await scope.page.type('#sign_up_first_name', 'Bharatindra');
	}

	async enterLastNameInSignupForm() {
		const lastNameInput = await scope.page.$('#sign_up_last_name');
		expect(lastNameInput).to.exist;

		console.log('Last name input field selected');

		await scope.page.type('#sign_up_last_name', 'Singh');
	}

	async enterEmailInSignupForm() {
		const emailInput = await scope.page.waitForSelector('#sign_up_email');
		expect(emailInput).to.exist;

		console.log('Email input field selected');

		await scope.page.type('#sign_up_email', 'bharatindrasingh@yopmail.com');
	}

	async enterPasswordInSignupForm() {
		const passwordInput = await scope.page.$('#sign_up_password');
		expect(passwordInput).to.exist;

		console.log('Password input field selected');

		await scope.page.type('#sign_up_password', 'bharatindra');
	}

	async enterMobileNumberInSignupForm() {
		const numberInput = await scope.page.$('#sign_up_number');
		expect(numberInput).to.exist;

		await new Promise(resolve => setTimeout(resolve, 1000));
		console.log('Number input field selected');
		const randomnumber = Math.floor(100000000 + Math.random() * 900000000) + '';
		await scope.page.type('#sign_up_number', randomnumber);
	}

	async clickOnSignupSubmitBtn() {
		const signupBtn = await scope.page.$('#sign_up_submit_btn');
		expect(signupBtn).to.exist;

		console.log('Sign Up Submit button selected');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#sign_up_submit_btn');
	}

	async enterBlankFirstNameInSignupForm() {
		const firstNameInput = await scope.page.$('#sign_up_first_name');
		expect(firstNameInput).to.exist;

		console.log('First name input field selected');
		await scope.page.type('#sign_up_first_name', '');
	}

	async enterBlankLastNameInSignupForm() {
		const lastNameInput = await scope.page.$('#sign_up_last_name');
		expect(lastNameInput).to.exist;

		console.log('Last name input field selected');
		await scope.page.type('#sign_up_last_name', '');
	}

	async enterBlankEmailInSignupForm() {
		const emailInput = await scope.page.waitForSelector('#sign_up_email');
		expect(emailInput).to.exist;

		console.log('Email input field selected');
		await scope.page.type('#sign_up_email', '');
	}

	async enterBlankPasswordInSignupForm() {
		const passwordInput = await scope.page.$('#sign_up_password');
		expect(passwordInput).to.exist;

		console.log('Password input field selected');
		await scope.page.type('#sign_up_password', '');
	}

	async enterBlankMobileNumberInSignupForm() {
		const numberInput = await scope.page.$('#sign_up_number');
		expect(numberInput).to.exist;

		console.log('Mobile Number input field selected');
		await scope.page.type('#sign_up_number', '');
	}

	async helperTextFirstNameSignup() {
		const selectorss = await scope.page.waitForSelector(
			'#sign_up_first_name-helper-text'
		);
		expect(selectorss).to.exist;

		const firstNameMatch = await this.verifyTheText(selectorss, 'Required');
		if (firstNameMatch) {
			console.log('Error text Present');
		}
	}

	async helperTextlastNameSignup() {
		const selectorss = await scope.page.waitForSelector(
			'#sign_up_last_name-helper-text'
		);
		expect(selectorss).to.exist;

		const lastNameMatch = await this.verifyTheText(selectorss, 'Required');
		if (lastNameMatch) {
			console.log('Error text Present');
		}
	}

	async helperTextEmailSignup() {
		const selectorss = await scope.page.waitForSelector(
			'#sign_up_email-helper-text'
		);
		expect(selectorss).to.exist;

		const emailMatch = await this.verifyTheText(selectorss, 'Required');
		if (emailMatch) {
			console.log('Error text Present');
		}
	}

	async helperTextPasswordSignup() {
		const selectorss = await scope.page.waitForSelector(
			'#sign_up_password-helper-text'
		);
		expect(selectorss).to.exist;

		const passwordMatch = await this.verifyTheText(selectorss, 'Required');
		if (passwordMatch) {
			console.log('Error text Present');
		}
	}

	async helperTextMobileNumberSignup() {
		const selectorss = await scope.page.waitForSelector(
			'#sign_up_number-helper-text'
		);
		expect(selectorss).to.exist;

		const numberMatch = await this.verifyTheText(
			selectorss,
			'mobile is a required field'
		);
		if (numberMatch) {
			console.log('Error text Present');
		}
	}
}

module.exports = SignupPage;

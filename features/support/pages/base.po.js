const scope = require('../scope');
const expect = require('chai').expect;

class BasePo {
	async verifyTheText(selector, expectedText) {
		const errorText = await (
			await selector.getProperty('textContent')
		).jsonValue();
		const matched = await this.matchBytext(errorText, expectedText);
		return matched;
	}

	async matchBytext(errText, expectedText) {
		return errText === expectedText;
	}
}
module.exports = BasePo;

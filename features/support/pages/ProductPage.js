const scope = require('../scope');
const BasePo = require('./base.po');
const expect = require('chai').expect;

class ProductPage extends BasePo {
	async clickOnTheProduct() {
		const productOfCategory = await scope.page.waitForSelector('#mobile');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#mobile');

		const verifyDetailsPageText = await scope.page.waitForSelector(
			'#product_detail_heading'
		);
		await new Promise(resolve => setTimeout(resolve, 1000));
		if (verifyDetailsPageText) {
			console.log('Landed on Product Details Page');
		}
	}

	async clickOnAddProductButton() {
		await scope.page.waitForSelector('#add_product_to_cart');
		await scope.page.click('#add_product_to_cart');
		await new Promise(resolve => setTimeout(resolve, 1000));

		const cartBadge = await scope.page.waitForSelector('#cart_badge');
		if (cartBadge) {
			console.log('Product added to cart');
		}
	}
	async clickOnGoToCartButton() {
		await scope.page.waitForSelector('#go_to_cart_page');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#go_to_cart_page');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log('clicked on go to cart');
	}

	async clickOnPlaceOrderButton() {
		await scope.page.waitForSelector('#place_order');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#place_order');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log('Place order button clicked');
	}
	async enterAddress() {
		await scope.page.waitForSelector('#address_field');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.type('#address_field', 'central library');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log('address filled in the address field');
	}

	async clickOnOrderPlaceButton() {
		await scope.page.waitForSelector('#final_order_place_btn');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#final_order_place_btn');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log('clicked on order place button');
	}
	async clickOnOrderStatusButton() {
		await scope.page.waitForSelector('#order_status');
		await new Promise(resolve => setTimeout(resolve, 1000));
		await scope.page.click('#order_status');
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log('clicked on order status button');
	}
}

module.exports = ProductPage;

/* eslint-disable class-methods-use-this */
class PaymentPage {
	constructor() {
		this.pageUrl = 'https://app.interviewme.pl/cart/payment-details';
	}

    getCardNumberInput = () => cy.get('#mainWrapper').find('input').first();
	getExpiryDateInput = () => cy.get('[name="expirationDate"]');
	getCVVINput = () => cy.get('[name="ccCVV"]');
	getCardholderNameInput = () => cy.get('[name="cardholderName"]');
	
	getSubmitPaymentButton = () => cy.getBySel('cart-pay-securely');

}

export default new PaymentPage();

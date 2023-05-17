/* eslint-disable class-methods-use-this */
class PricingPage {
	constructor() {
		this.pageUrl = 'https://app.interviewme.pl/cart/pricing';
	}

    get14DayPlanButton = () => cy.getBySel('cart-plan-choose-14611');
    getSubmitButton = () => cy.getBySel('cart-plan-continue');

}

export default new PricingPage();

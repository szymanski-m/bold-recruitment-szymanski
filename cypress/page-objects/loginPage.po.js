/* eslint-disable class-methods-use-this */
class LoginPage {
	constructor() {
		this.pageUrl = 'https://app.interviewme.pl/login';
	}

    getLoginInput = () => cy.getBySel('auth-login-email');
    getPasswordInput = () => cy.getBySel('auth-login-password');
    getSubmitButton = () => cy.getBySel('auth-login-submit');
}

export default new LoginPage();

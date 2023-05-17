/* eslint-disable class-methods-use-this */
class DashboardPage {
	constructor() {
		this.pageUrl = 'https://app.interviewme.pl/dashboard/main';
	}

    getDownloadCVButton = () => cy.get('button').contains('Pobierz CV');

}

export default new DashboardPage();

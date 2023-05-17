import loginPage from '../page-objects/loginPage.po';
import dashboardPage from '../page-objects/dashboardPage.po';
import pricingPage from '../page-objects/pricingPage.po';
import paymentPage from '../page-objects/paymentPage.po';


const LOGIN = 'vincent-sqa+rekrutacja@bold.com';
const PASSWORD = 'parmezan6';
const CARD_NUMBER = '4000 000 000 0051';
const CARD_EXPIRY_DATE = '1023';
const CARD_CVV = '123';
const CARDHOLDER_NAME = 'Vincent Testowy';

describe('login page', () => {
  it('login using valid credentials and order CV', () => {
    cy.visit(loginPage.pageUrl);

    // Fill and send login data
    loginPage
      .getLoginInput()
      .should('be.visible');

    loginPage
      .getLoginInput()
      .type(LOGIN);

    loginPage
      .getPasswordInput()
      .type(PASSWORD);

    loginPage
      .getSubmitButton()
      .should('be.enabled');

    loginPage
      .getSubmitButton()
      .click({force: true});

    // Select CV - TEST
    cy
      .contains('CV - TEST')
      .should('be.visible');

    dashboardPage
      .getDownloadCVButton()
      .click();

    // Select 14 day plan option
    pricingPage
      .get14DayPlanButton()
      .click();

    pricingPage
      .getSubmitButton()
      .click();
  
    // Fill data inside iframe
    cy
      .get('iframe#ccframe')
      .should('be.visible')
      .then($iframe => {
        const $body = $iframe.contents().find('#mainWrapper');

        cy
          .wrap($body[0])
          .find('input#ccNum')
          .type(CARD_NUMBER);

        cy
          .wrap($body[0])
          .find('input#ccCVV').type(CARD_CVV);
    });

    // Fill other payment data
    paymentPage
      .getExpiryDateInput()
      .type(CARD_EXPIRY_DATE);

    paymentPage
      .getCardholderNameInput()
      .type(CARDHOLDER_NAME);

    // Submit payment
    paymentPage
      .getSubmitPaymentButton()
      .click({force: true});

    // Verify if message appears correctly
    cy
      .get('#app')
      .should('contain', 'Coś poszło nie tak z Twoją płatnością')
      .should('contain', 'Twoja płatność nie mogła zostać zrealizowana.')
      .should('contain', 'Sprawdź swoje dane do płatności lub spróbuj jeszcze raz inną metodą płatności.');
  });
});

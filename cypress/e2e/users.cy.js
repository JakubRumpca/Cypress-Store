import LoginPage from '../page_objects/loginPage';

describe('Users', () => {
  const loginPage = new LoginPage();
  const standardUser = Cypress.env('STANDARD_USER');
  const lockedUser = Cypress.env('LOCKED_USER');
  const password = Cypress.env('PASSWORD');
  const errorMessageLocator = '[data-test="error"]';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should check if the standard user can log in', () => {
    loginPage.login(standardUser, password);
    cy.get('[data-test="title"]').should('contain', 'Products');
  });
  
  it('Should check if the locked user can not log in', () => {
    loginPage.login(lockedUser, password);
    cy.get(errorMessageLocator).should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Should check if the standard user can not log in using the wrong password', () => {
    loginPage.login(standardUser, "wrongPassword");
    cy.get(errorMessageLocator).should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});

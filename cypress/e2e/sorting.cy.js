import LoginPage from '../page_objects/loginPage';
import HomePage from '../page_objects/homePage';

describe('Sorting', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const standardUser = Cypress.env('STANDARD_USER');
  const password = Cypress.env('PASSWORD');

  beforeEach(() => {
    cy.visit('/');
    loginPage.login(standardUser, password);
  });

  it('Should sort the products by name in descending and ascending order', () => {
    homePage.sortByName("desc");
    cy.get('[data-test= "inventory-item-name"]').first().contains('T-Shirt (Red)')
    homePage.sortByName("asc");
    cy.get('[data-test= "inventory-item-name"]').first().contains('Sauce Labs Backpack')
  });
  
  it('Should sort the products by price in descending and ascending order', () => {
    homePage.sortByPrice("desc");
    cy.get('[data-test= "inventory-item-name"]').first().contains('Sauce Labs Fleece Jacket')
    homePage.sortByPrice("asc");
    cy.get('[data-test= "inventory-item-name"]').first().contains('Sauce Labs Onesie')
  });
});

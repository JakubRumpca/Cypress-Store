describe('Users', () => {
  const standardUser = Cypress.env('standard_user');
  const lockedUser = Cypress.env('locked_user');
  const password = Cypress.env('password');

  it('Should check if the standard user can log in', () => {
    cy.visit('/');
    cy.login(standardUser, password);
    cy.get('[data-test="title"]').should('contain', 'Products');
  });
  
  it('Should check if the locked user can not log in', () => {
    cy.visit('/');
    cy.login(lockedUser, password);
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });
});

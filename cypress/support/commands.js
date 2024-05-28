Cypress.Commands.add('login', (user, password) => {
    cy.get('input[data-test="username"]').type(user);
    cy.get('input[data-test="password"]').type(password, {log: false});
    cy.get('input[data-test="login-button"]').click();
});

Cypress.Commands.add('addProduct', (product = "Backpack" | "BikeLight") => {
    if (product == "Backpack") {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    } else if (product == "BikeLight") {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    } else if (product == "Onesie") {
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    };
});

Cypress.Commands.add('goToOrderDetails', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
});

Cypress.Commands.add('removeOnesieFromProduct', () => {
    cy.get('[data-test="remove-sauce-labs-onesie"]').click();
});

Cypress.Commands.add('verifyNumberOfAddedProducts', (number) => {
    cy.get('[data-test="inventory-item"]').then(($items) => {
        expect($items, number+' items}').to.have.length(number);
      });
});

Cypress.Commands.add('orderDetails', (data) => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(data.firstName);
    cy.get('[data-test="lastName"]').type(data.lastName);
    cy.get('[data-test="postalCode"]').type(data.postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
});

describe('Order', () => {
    const standardUser = Cypress.env('standard_user');
    const password = Cypress.env('password');
    const orderData = {
        firstName: "John",
        lastName: "Wick",
        postalCode: "84-200"
    };
    
    it('Should order backpack and bike light', () => {
        cy.visit('/');
        cy.login(standardUser, password);
        cy.addProduct("Backpack");
        cy.addProduct("BikeLight");
        cy.goToOrderDetails();
        cy.verifyNumberOfAddedProducts(2);
        cy.orderDetails(orderData);
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
    });

    it('Should add three products to the cart and then remove one of them', () => {
        cy.visit('/');
        cy.login(standardUser, password);
        cy.addProduct("Backpack");
        cy.addProduct("BikeLight");
        cy.addProduct("Onesie");
        cy.goToOrderDetails();
        cy.verifyNumberOfAddedProducts(3);
        cy.removeOnesieFromProduct(orderData);
        cy.verifyNumberOfAddedProducts(2);
    });
});

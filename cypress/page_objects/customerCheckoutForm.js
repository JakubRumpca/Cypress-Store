class CustomerCheckoutForm {

  orderDetails(data) {
    cy.get('[data-test="firstName"]').type(data.firstName);
    cy.get('[data-test="lastName"]').type(data.lastName);
    cy.get('[data-test="postalCode"]').type(data.postalCode);
    cy.get('[data-test="continue"]').click();
  }
}

export default CustomerCheckoutForm;
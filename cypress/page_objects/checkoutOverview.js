class Checkout {

  confirmOrder() {
    cy.get('[data-test="finish"]').click();
  }
}
  
export default Checkout;  
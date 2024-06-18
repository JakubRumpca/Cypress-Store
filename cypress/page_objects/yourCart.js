class Cart {

  removeProduct(productName) {
    cy.get(`[data-test="remove-sauce-labs-${productName}"]`).click();
  }

  goToOrderDetails() {
    cy.get('[data-test="checkout"]').click();
  }

  verifyNumberOfAddedProducts(number) {
    cy.get('[data-test="inventory-item"]').then(($items) => {
      expect($items, number+' items}').to.have.length(number);
    });
  }
}

export default Cart;  
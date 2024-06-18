class HomePage {

  addProduct(productName) {
    cy.get(`[data-test="add-to-cart-sauce-labs-${productName}"]`).click();
  }

  goToYourCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

export default HomePage;  
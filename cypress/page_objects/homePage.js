class HomePage {

  addProduct(productName) {
    cy.get(`[data-test="add-to-cart-sauce-labs-${productName}"]`).click();
  }

  goToYourCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

  sortByName(order) {
    const optionValue = (order == "asc") ? "az" : "za";
    cy.get('[data-test="product-sort-container"]').select(optionValue);
  }

  sortByPrice(order) {
    const optionValue = (order == "asc") ? "lohi" : "hilo";
    cy.get('[data-test="product-sort-container"]').select(optionValue);
  }
}

export default HomePage;  
import LoginPage from '../page_objects/loginPage';
import HomePage from '../page_objects/homePage';
import Cart from '../page_objects/yourCart';
import CustomerCheckoutForm from '../page_objects/customerCheckoutForm';
import Checkout from '../page_objects/checkoutOverview';

describe('Order', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const cart = new Cart();
  const customerCheckoutForm = new CustomerCheckoutForm();
  const checkout = new Checkout();
  const standardUser = Cypress.env('STANDARD_USER');
  const password = Cypress.env('PASSWORD');
  const orderData = {
    firstName: "John",
    lastName: "Wick",
    postalCode: "84-200"
  };
  
  beforeEach(() => {
    cy.visit('/');
    loginPage.login(standardUser, password);
  });

  it('Should order backpack and bike light', () => {
    homePage.addProduct("backpack");
    homePage.addProduct("bike-light");
    homePage.goToYourCart();
    cart.verifyNumberOfAddedProducts(2);
    cart.goToOrderDetails();
    customerCheckoutForm.orderDetails(orderData);
    checkout.confirmOrder();
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
  });

  it('Should add three products to the cart and then remove one of them', () => {
    homePage.addProduct("backpack");
    homePage.addProduct("bike-light");
    homePage.addProduct("onesie");
    homePage.goToYourCart();
    cart.verifyNumberOfAddedProducts(3);
    cart.removeProduct("onesie");
    cart.verifyNumberOfAddedProducts(2);
  });
});

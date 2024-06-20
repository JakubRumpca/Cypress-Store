# Test Cases:

## 1) Test Case: Successful login as a standard user

### Test Case ID:
- TC-01

### Test Case Name:
- Should check if the standard user can log in

### Test Objective:
- Verify that the standard user can successfully log in.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (standard_user).
- Verify successful login by checking the page title. (Products)

### Expected Results:
- The user successfully logs in and is redirected to the homepage.

---

## 2) Test Case: Failed login as blocked user

### Test Case ID:
- TC-02

### Test Case Name:
- Should check if the locked user can not log in.

### Test Objective:
- Verify that the locked user can not log in.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (locked_user).
- Verify the presence of a error message (Epic sadface: Sorry, this user has been locked out.).

### Expected Results:
- The user can not logs in. 
- The error message is displayed.

---

## 3) Test Case: Successful order placement

### Test Case ID:
- TC-03

### Test Case Name:
- Should order backpack and bike light

### Test Objective:
- Verify that a user can successfully place an order.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).
- The products to be added are available in stock.

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (standard_user).
- Search for the first product (backpack) and add it to the cart. 
- Search for the second product (bike light) and add it to the cart. 
- Go to the shopping cart page.
- Verify that both products are added in the cart.
- Click on the "Checkout" button.
- Fill in the required shipping details (first name, last name, postal code).
- Click on the "Continue" button.
- Click on the "Finish" button.
- Verify order confirmation (Thank you for your order!).

### Expected Results:
- The user successfully logs in and is redirected to the homepage.
- Both products are correctly added to the cart and displayed with accurate details.
- The checkout process completes without errors.
- The order confirmation message is displayed.

---

## 4) Test Case: Remove product from the cart

### Test Case ID:
- TC-04

### Test Case Name:
- Should add three products to the cart and then remove one of them.

### Test Objective:
- Verify that a user can remove product from cart.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).
- The products to be added are available in stock.

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (standard_user).
- Search for the first product (backpack) and add it to the cart. 
- Search for the second product (bike light) and add it to the cart. 
- Search for the third product (onesie) and add it to the cart. 
- Go to the shopping cart page.
- Verify that three products are added in the cart.
- Remove oneside from the cart.
- Verify that two products are added in the cart.

### Expected Results:
- The user successfully logs in and is redirected to the homepage.
- Three products are correctly added to the cart and displayed with accurate details.
- The removal process completes without errors.

---

## 5) Test Case: Failed login with wrong password

### Test Case ID:
- TC-05

### Test Case Name:
- Should check if the standard user can not log in using the wrong password.

### Test Objective:
- Verify that the standard user can not log in.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials and purposely sets the wrong password.

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Fill username input (standard_user).
- Fill password input (wrongPassword).
- Verify the presence of a error message (Epic sadface: Username and password do not match any user in this service).

### Expected Results:
- The user can not logs in. 
- The error message is displayed.

---

## 6) Test Case: Sort by name

### Test Case ID:
- TC-06

### Test Case Name:
- Should sort the products by name in descending and ascending order.

### Test Objective:
- Verify that a user can sort products by name.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (standard_user).
- sort products by name in descending order.
- verify that the active sorting option is "Name (Z to A)".
- verify that the first product on the list is "T-Shirt (Red)".
- sort products by name in ascending order.
- verify that the active sorting option is "Name (A to Z)".
- verify that the first product on the list is "Sauce Labs Backpack".

### Expected Results:
- The user successfully logs in and is redirected to the homepage.
- Products are sorted correctly in descending order by name.
- Products are sorted correctly in ascending order by name.

---

## 7) Test Case: Sort by price

### Test Case ID:
- TC-07

### Test Case Name:
- Should sort the products by price in descending and ascending order.

### Test Objective:
- Verify that a user can sort products by price.

### Pre-conditions:
- The user has a valid account on the online store.
- The user knows their login credentials (username and password).

### Steps:
- Open the web browser.
- Go to the online store's login page URL (https://www.saucedemo.com/).
- Login to the user (standard_user).
- sort products by price in descending order.
- verify that the active sorting option is "Price (high to low)".
- verify that the first product on the list is "Sauce Labs Fleece Jacket".
- sort products by price in ascending order.
- verify that the active sorting option is "Price (low to high)".
- verify that the first product on the list is "Sauce Labs Onesie".

### Expected Results:
- The user successfully logs in and is redirected to the homepage.
- Products are sorted correctly in descending order by price.
- Products are sorted correctly in ascending order by price.

---
Cypress.Commands.add('login', (user, password) => {
    cy.get('input[data-test="username"]').type(user)
    cy.get('input[data-test="password"]').type(password, {log: false})
    cy.get('input[data-test="login-button"]').click()
})

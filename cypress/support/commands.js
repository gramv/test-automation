// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }) 

// ***********************************************
// Common Custom Commands
// ***********************************************

// Login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-testid=email-input]').type(email);
  cy.get('[data-testid=password-input]').type(password);
  cy.get('[data-testid=login-button]').click();
});

// Logout command
Cypress.Commands.add('logout', () => {
  cy.get('[data-testid=logout-button]').click();
  cy.url().should('include', '/login');
});

// Check authentication state
Cypress.Commands.add('checkAuthState', (isAuthenticated) => {
  if (isAuthenticated) {
    cy.get('[data-testid=user-profile]').should('exist');
  } else {
    cy.get('[data-testid=login-button]').should('exist');
  }
});

// API Commands
Cypress.Commands.add('seedDatabase', () => {
  cy.request('POST', `${Cypress.env('API_URL')}/test/seed`);
});

Cypress.Commands.add('cleanupDatabase', () => {
  cy.request('POST', `${Cypress.env('API_URL')}/test/cleanup`);
});
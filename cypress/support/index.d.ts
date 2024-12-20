declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login with email and password
     * @example cy.login('test@example.com', 'password123')
     */
    login(email: string, password: string): Chainable<Element>

    /**
     * Custom command to logout the current user
     * @example cy.logout()
     */
    logout(): Chainable<Element>

    /**
     * Custom command to check authentication state
     * @example cy.checkAuthState(true)
     */
    checkAuthState(isAuthenticated: boolean): Chainable<Element>

    /**
     * Custom command to seed the test database
     * @example cy.seedDatabase()
     */
    seedDatabase(): Chainable<Element>

    /**
     * Custom command to cleanup the test database
     * @example cy.cleanupDatabase()
     */
    cleanupDatabase(): Chainable<Element>
  }
} 
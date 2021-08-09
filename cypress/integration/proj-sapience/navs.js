describe('Basic Navigations', () => {
  it('Dafault Landing', () => {
    cy.visit('http://localhost:3000')

    // cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/PlannerHub')
  })
})
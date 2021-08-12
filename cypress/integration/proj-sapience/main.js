/// <reference types="cypress" />
//Import the color assertion plug-in for chai that supports hex color code.
import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('menu navs', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
  })

  it('Redirected to planner hub by default', () => {
    // Should be on a new URL which includes '/PlannerHub'
    cy.url().should('include', '/PlannerHub')
  })

  it('Able to navigate through the menu', () => {
    // The menu should have three items in this case
    cy.get('.menu div.navs').as('menu')

    cy.log('**[Should have 3 items in the menu]()**')
    cy.log('**[Checking each item\'s label]()**')
    cy.get('@menu')
      .should(($lis) => {
        expect($lis, '3 items').to.have.length(3)
        expect($lis.eq(0), 'first item').to.contain('New Plan')
        expect($lis.eq(1), 'second item').to.contain('Planner Hub')
        expect($lis.eq(2), 'third item').to.contain('My Tasks')
      })
      .each(($el) => {
        // Each item of the menu should has one icon and one label.
        // When hovered over, the item's background should slightly highlighted with darker bg.
        console.log($el)
        cy.log(`**[Hover over button [${$el.text()}]]()**`)
        cy.wrap($el)
          .realHover()
          .should('have.css', 'cursor', 'pointer')
          .and('have.css', 'background-color')
          .and('be.colored', '#ececec')

        cy.log(`**[Icon of [${$el.text()}] is visible]()**`)
        cy.wrap($el)
          .get('i')
          .should('be.visible')
      })
     
    // cy.get('@menu')

    cy.get('@menu').contains('My Tasks').click()
    cy.url().should('include', '/MyTasks')
    cy.get('.my-tasks').contains('Your tasks:')

  })
})

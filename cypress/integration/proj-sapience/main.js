/// <reference types="cypress" />
//Import the color assertion plug-in for chai that supports hex color code.

import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Navigation', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
    cy.get('.menu div.navs').as('menu')
  })

  it('Redirected to planner hub by default', () => {
    // Should be on a new URL which includes '/PlannerHub'
    cy.url().should('include', '/PlannerHub')
  })

  it('Scan through the menu', () => {
    // The menu should have three items in this case
    
    cy.log('**[Should have 3 items in the menu]()**')
    cy.log('**[Checking each item\'s icon and label]()**')
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
        cy.log(`**[Hover over button [${$el.text()}]]()**`)
        cy.wrap($el)
          .realHover()
          .should('have.css', 'cursor', 'pointer')
          .and('have.css', 'background-color')
          .and('be.colored', '#ececec')

        cy.log(`**[Icon of [${$el.text()}] is visible]()**`)
        cy.wrap($el)
          .find('i')
          .should('exist')

        cy.log(`**[Label of [${$el.text()}] is visible]()**`)
        cy.wrap($el)
          .find('span')
          .should('exist')
      })

    cy.log(`**[Able to collapse the menu]()**`)
    cy.get('.menu > .nav-ext')
      .find('i')
      .should('have.class', 'bi-arrow-bar-left')
      .click()

    cy.get('@menu')
      .find('span')
      .should('not.exist')
  })

  it('Click "My Tasks" and navigate to the page', () => {
    cy.get('@menu').contains('My Tasks').click()
    cy.url().should('include', '/MyTasks')
    cy.get('.my-tasks').contains('Your tasks:')
  })

  it('Click "New Plan" Test New Plan Overlay', () => {
    cy.log(`**[The form is invisible before clicking "New Plan"]()**`)
    cy.get('.overlay')
      .should('not.be.visible')

    cy.log(`**[The form is visible after clicking "New Plan"]()**`)
    cy.get('@menu')
      .contains('New Plan')
      .click()

    cy.get('.overlay')
      .should('be.visible')
      .and('include.text', 'New Plan')
      .find('.overlay-content')
      .should('be.visible')

    cy.log(`**[Dismiss the form by clicking outside the form on the overlay]()**`)
    cy.get('.overlay')
      .eq(0)
      .click('topRight')

    cy.get('.overlay')
      .should('not.be.visible')
  })

  it('Click "Planner Hub" and able to view existing plans and tasks', () => {
    cy.get('.plan-dashboard')
      .contains('Welcome, Name!')
      .should('exist')

    cy.get('.planCard')
      .should(($lis) => {
        expect($lis, '2 plans').to.have.length(2)
        expect($lis.eq(0), 'First plan').to.contain('Onboarding')
        expect($lis.eq(1), 'Second plan').to.contain('Other Logistics')
      })

    cy.log(`**[View tasks under a plan]()**`)
    cy.get('.planCard').eq(0)
      .should('contain', 'Onboarding')
      .click()
    cy.url().should('include', '/PlannerHub?pid=p2z29m')
    cy.get('.plan-header')
      .should('contain', 'Onboarding')

    cy.get('.plan-body>.bucket div.bucketTitle>span')
      .should(($lis) => {
        expect($lis, '3 buckets, including 1 for new bucket').to.have.length(3)
        expect($lis.eq(0), 'First bucket').to.contain('Training')
        expect($lis.eq(1), 'Second bucket').to.contain('Project')
        expect($lis.eq(2), 'Add bucket').to.contain('Add new bucket')
      })
    
    cy.get('.addNewTask')
      .should('have.length', 2)
      .each(($el)=>{
        cy.log(`**[Icon and label of "Add new task" are visible]()**`)
        cy.wrap($el)
          .contains('Add task')
          .find('i')
          .should('exist')
      })
    
      cy.get('.planTask')
        .should('have.length', 3)
  })
})

describe('CRUD of plans and tasks', () => {

  before(()=>{
    cy.visit('/')
    sessionStorage.clear('planList')
  })

  it('Create a new plan', () => {
    // Should be on a new URL which includes '/PlannerHub'
    cy.get('.menu div.navs').as('menu')
      .contains('New Plan')
      .click()
    
    cy.get('input[name="formPlanTitle"]')
      .type('Test New Plan')
      .should('have.value', 'Test New Plan')

    cy.get('.overlay-content button[type="submit"]')
      .click()

    cy.get('.planCard')
      .should(($lis) => {
        expect($lis, '2 plans').to.have.length(3)
        expect($lis.eq(2), 'The new plan').to.contain('Test New Plan')
      })
  })

  it('Add a new bucket', () => {
    cy.get('.planCard').eq(2)
      .should('contain', 'Test New Plan')
      .click()
    cy.url().should('include', '/PlannerHub?pid=')
    cy.get('.plan-header')
      .should('contain', 'Test New Plan')

    cy.get('.bucket')
      .then(($lis)=>{
        expect($lis).to.have.length(1)
        cy.wrap($lis)
          .find('.addNewTask')
          .should('not.exist')
      })
      
    cy.get('div.bucketTitle')
      .click()
      .type('Test new bucket')

    cy.get('input[name="inputBucketTitle"]')
      .should('have.value', 'Test new bucket')
      .blur()

    cy.get('.bucket')
      .then(($lis)=>{
        expect($lis).to.have.length(2)
        cy.wrap($lis).eq(0)
          .contains('Test new bucket')

        cy.wrap($lis).eq(0)
          .find('.addNewTask')
          .should('exist')
      })
  })

  it('Edit an existing bucket title', () => {
    cy.get('div.bucketTitle').eq(0)
      .click()
    
    cy.focused()
      .clear()
      .type('Edited bucket title')
      .should('have.value', 'Edited bucket title')
      .blur()

    cy.get('.bucket').eq(0)
      .contains('Edited bucket title')
  })

  it('Add a new task', () => {
    cy.get('.planTask')
      .should('not.exist')

    cy.get('div.addNewTask')
      .click()
    
    cy.focused()
      .type('Test new task')
      .should('have.value', 'Test new task')
    
    cy.get('.inputAddNewTask button[type="button"]')
      .click()

    cy.get('.planTask')
      .contains('Test new task')
  })

  it('Delete a task', () => {
    cy.get('.planTask')
      .should('have.length', 1)
      .contains('Test new task')
      .find('>span')
      .click()

    cy.get('.planTask')
      .should('not.exist')
  })
  
  it('Delete a plan', () => {
    cy.get('.header i.bi-file-bar-graph')
      .click()
    cy.get('.planCard').eq(2)
      .find('button.close')
      .click()

    cy.get('.planCard')
      .should('have.length', 2)
  })
})

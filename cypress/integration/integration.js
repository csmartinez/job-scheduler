Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Moving between pages', function() {
  it('Load index', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Index.html')
  })
  it('Click get started', function() {
    cy.contains('Get Started')
      .click()
  })
  it('Verify correct page', function() {
    cy.url()
      .should('include', 'https://csmartinez.github.io/job-scheduler/Form.html')

    cy.get('legend')
      .should('contain', 'Create a Work Schedule')
  })
})

describe('Moving between entering hours to entering employee information', function() {
  it('Load app', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Form.html')
  })
  it('Enter number of employees', function() {
    cy.get('#employeeAmount')
      .type('4')
  })
  it('Verify employees added', function() {
    cy.get('#filldetails')
      .click()

    cy.contains('1. Employee Name: ')
      .should('contain', '1. Employee Name: ')
  })
})

describe('Moving between entering employee information to schedule', function() {
  it('Load page', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Form.html')
  })
  it('Enter employee', function() {
    cy.get('#employeeAmount')
      .type('1')

    cy.get('#filldetails')
      .click()

    cy.get('#employee0')
      .type('nick')

    cy.get('.btn-primary').not('#filldetails')
      .click()
  })
  it('Verify correct page', function() {
    cy.contains('nick')
      .should('contain', 'Name: nick / Start Time: 0 / End Time: 8')
  })
})

describe('Test employee list is being populated', function() {
  it('Load page', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Form.html')
  })
  it('Enter multiple employees', function() {
    cy.get('#employeeAmount')
      .type('2')

    cy.get('#filldetails')
      .click()

    cy.get('#employee0')
      .type('nick')

    cy.get('#employee1')
      .type('brandon')

    cy.get('.btn-primary').not('#filldetails')
      .click()
  })
  it('Verify first employee found', function() {
    cy.contains('nick')
      .should('contain', 'Name: nick')
  })
  it('Verify second employee found', function() {
    cy.contains('nick')
      .should('contain', 'Name: brandon')
  })
})

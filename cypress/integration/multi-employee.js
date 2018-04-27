Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test adding single and multiple employees per shift', function() {
  it('Load page', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Form.html')
  })
  it('Testing 1 employee per shift', function() {
    cy.get('#employeePerShift')
      .type('1')

    cy.get('#employeeAmount')
      .type('6')

    cy.get('#filldetails')
      .click()

    cy.get('#employee0')
      .type('James Holden')

    cy.get('#employee1')
      .type('Naomi Nagata')

    cy.get('#employee2')
      .type('Alex Kamal')

    cy.get('#employee3')
      .type('Amos Burton')

    cy.get('#employee4')
      .type('Bobbie Draper')

    cy.get('#employee5')
      .type('Clarissa Mao')

    cy.get('.btn-primary').not('#filldetails')
      .click()
  })
  it('Verify Monday Shift 2 in schedule', function() {
    cy.get('#Mondayshift1')
  })

  it('Verify Monday Shift 3 not in schedule', function() {
    cy.get('#Mondayshift2').not()
  })

  it('Testing multiple employees per shift', function() {
    cy.get('#employeePerShift')
      .type('2')

    cy.get('#employeeAmount')
      .type('6')

    cy.get('#filldetails')
      .click()

    cy.get('#employee0')
      .type('James Holden')

    cy.get('#employee1')
      .type('Naomi Nagata')

    cy.get('#employee2')
      .type('Alex Kamal')

    cy.get('#employee3')
      .type('Amos Burton')

    cy.get('#employee4')
      .type('Bobbie Draper')

    cy.get('#employee5')
      .type('Clarissa Mao')

    cy.get('.btn-primary').not('#filldetails')
      .click()
  })
  it('Verify Monday Shift 2 in schedule', function() {
    cy.get('#Mondayshift1')
  })

  it('Verify Monday Shift 3 also in schedule', function() {
    cy.get('#Mondayshift2')
  })
})

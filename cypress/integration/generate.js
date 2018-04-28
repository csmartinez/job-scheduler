Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Test adding single and multiple employees per shift', function() {
  it('Load page', function() {
    cy.visit('https://csmartinez.github.io/job-scheduler/Form.html')
  })
  it('Adding Data', function() {
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
  it('Get first schedule', function() {
    cy.get('#MondayShift0') => {
      // capture what num is right now
      const shift1 = ('#MondayShift0')

      cy.get('regenerate').click().then(() => {
        // now capture it again
        const shift2 = ('#MondayShift0'))

        // make sure its what we expected
        expect(shift1).to.eq(shift2).not()
      })
    })
  }
}

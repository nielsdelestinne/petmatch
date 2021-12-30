describe('My First Test', () => {
  it('Visits the initial project page', () => {

    cy.fixture('pets').then((json) => {
      cy.intercept('GET', '/pets', json)
    });

    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('sandbox app is running!')
  })
})

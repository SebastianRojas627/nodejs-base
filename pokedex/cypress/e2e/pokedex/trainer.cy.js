/// <reference types="cypress" />

describe('example trainer app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Register Trainer', () => {
        cy.contains('Crear')
        cy.get('input').first().type('Ash')
        cy.get('input').last().type(3)
        cy.get('.btn-login').click()
    })
  
})
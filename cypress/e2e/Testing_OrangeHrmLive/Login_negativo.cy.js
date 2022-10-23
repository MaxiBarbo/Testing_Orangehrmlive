import indexitems from './index_items'
import indextext from './index_text'

describe('Testing en Login', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      })

    it('Login Campos Vacios', () => {

        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')

    })

    it('Login Credenciales Incorrectas', () => {

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a')
        cy.get('.oxd-button').click()

    })
 
    it('Check Items Login', () => {

        indexitems.verifyItems('be.visible')// Checkeamos que esten visibles todos los elementos en el Login utilizando Pages Object mediante .Json
        

    })


})
import indexitems from './index_items'

describe('Testing en pagina Login', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Login Campos Vacios', () => { // Se prueba Login mediante un caso de prueba Negativo dejando campos de datos vacios
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
    })

    it('Login Credenciales Incorrectas', () => { // Se prueba Login mediante un caso de prueba Negativo (Se busca no poder realizar Login)
        cy.login('abcd','abcd')
        cy.get('.oxd-alert').contains('Invalid credentials')
    })
 
    it('Check Items Login', () => {
        indexitems.verifyItems('exist')// Checkeamos que esten visibles todos los elementos en el Login utilizando Pages Object mediante .Json
        
    })


})
describe('example to-do app', () => {

    beforeEach(() => {
        cy.visit('https://maxibarbo.github.io/Cotizar_divisas/index.html')


      })

    it('Happy path formualrio de registro', ()=>{

        cy.get('[type=""]').click()
        cy.get('#nombre').type('maximiliano')
        cy.get('#mail').type('Holi@gmail.com')
        cy.get('#pass').type('maximiliano')
        cy.get('.btn-outline-primary')

    })

    it('Check Contenido Visible en index', ()=>{

        let titleCripto = 'Criptomonedas'
        let titleDivisas = 'Divisas'
        let title = 'Cotizador Divisas'

        cy.get('[href="Html/criptomonedas.html"] > .animate__animated').contains(`${titleCripto}`).should('be.visible')
        cy.get('[href="Html/divisas.html"] > .animate__animated').contains(`${titleDivisas}`).should('be.visible')
        cy.get('.itemsNav > .nav-link > #navText').should('be.visible')
        cy.get('#navbarNav').find('a').should('be.visible')
        cy.get('.switch').should('be.visible')
        cy.get('[type=""]').should('be.visible')
        cy.get('h1').contains(`${title}`).should('be.visible')
        
  

    })

    it('Ingreso a Criptomonedas', ()=>{
        cy.request('https://api.binance.com/api/v1/ticker/24hr')
        .then((response) => {
        expect(response).property('status').to.equal(200)
           
    })
        
    
    })
})
  
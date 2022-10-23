describe('example to-do app', () => {

    beforeEach(() => {
        cy.visit('https://maxibarbo.github.io/Cotizar_divisas/index.html')


      })

    it('ingreso a Criptos', ()=>{

      cy.get('[href="Html/criptomonedas.html"] > .animate__animated').click()
      

    })

})
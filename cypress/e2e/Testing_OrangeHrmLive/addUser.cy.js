describe('Agregar Un Usuario en Admin', () => {
    
    beforeEach(() => {   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
      })

    it('Add User', () => {
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.get(':nth-child(2) > .oxd-input').type('Maxpower')
        })     
    }) 

})
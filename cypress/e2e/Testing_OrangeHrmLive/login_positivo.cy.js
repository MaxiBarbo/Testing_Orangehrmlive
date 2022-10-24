describe('Testing en Login', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
    })

    it('Despliegue Links Menu de navegacion superior Admin', () => {     
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.get(home.linksup1).click()
            cy.get(home.linksup2).click()
            cy.get(home.linksup3).click()
            cy.get(home.linksup4).click()
            cy.get(home.linksup5).click()
        })  
    }) 
    
    it('Despliegue Links Menu de navegacion superior PIM', () => {    
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder2).click()
            cy.get(home.linksup6).click()
            cy.get(home.linksup7).click()
            cy.get(home.linksup8).click()
            cy.get(home.linksup9).click()    
        })  
    })

    it('Buesqueda por items en Menu de navegacion lateral derecho', () => {
        cy.fixture('home').then((home)=>{
            cy.get(home.inputSearch).type('admin').clear()
            cy.get(home.inputSearch).type('pim').clear()
            cy.get(home.inputSearch).type('leave').clear()
            cy.get(home.inputSearch).type('time').clear()
            cy.get(home.inputSearch).type('recruiment').clear()
            cy.get(home.inputSearch).type('my info').clear()
            cy.get(home.inputSearch).type('performance').clear()
            cy.get(home.inputSearch).type('dashboard').clear()
            cy.get(home.inputSearch).type('directory').clear()
            cy.get(home.inputSearch).type('maintenance').clear()
            cy.get(home.inputSearch).type('buzz').clear()            
        })  
    }) 
 
})
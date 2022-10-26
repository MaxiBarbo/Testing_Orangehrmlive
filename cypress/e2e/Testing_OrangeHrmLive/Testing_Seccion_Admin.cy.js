
describe('Seccion Admin en menu de navegacion lateral', () => {

    beforeEach(() => {   
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login('Admin','admin123')
      })

    it('Existencia de Links en Menu de Navegacion lateral derecho', () => { // Se comprueba la totalidad de existencia de los links en el menu de navegacion derecho 
        cy.get('.oxd-main-menu-item').should('have.length',11)
    })  

    it('Existencia de Links en Menu de navegacion superior en seccion Admin', () => { // Se comprueba la totalidad de exixtencia de los links en el menu de navegacion superior en seccion Admin
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.get(home.linkSupAdmin).should('have.length', 5)
        })
    })

    it.only('Texto en header Indicando Seccion y User Menu', () => { // Se comprueba texto en header indicando seccion
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.headerText('AdminUser Management')
            cy.get(home.userMenu).should('exist')
        })  
        
    })

    it('Buscar usuario Inexistente, User Rol: Admin y Status: Enable', () => {   // Caso de Prueba para buscar Usuario existente con "User Rol = Admin" y "Status = Enable"
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.searchUser('Juan','Mario')
            cy.get(home.adminSelectBtn).click()
            cy.contains('[role="option"]', 'Admin').click() 
            cy.get(home.statuSelectBtn).click()
            cy.contains('[role="option"]', 'Enabled').click() 
            cy.get(home.searchBtn).click({ force: true })
            cy.get('.oxd-toast').should('be.visible').contains('No Records Found')
        })

    })

    it('Buscar usuario Existente, User Rol: Admin y Status: Enable', () => {   // Caso de Prueba para buscar Usuario existente con "User Rol = Admin" y "Status = Enable"
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.searchUser('Admin','Paul')
            cy.get(home.adminSelectBtn).click()
            cy.contains('[role="option"]', 'Admin').click() 
            cy.get(home.statuSelectBtn).click()
            cy.contains('[role="option"]', 'Enabled').click() 
            cy.get(home.searchBtn).click({ force: true })
            
        })

    })

}) 
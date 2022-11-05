class SeccionAdmin {
//Locators

    navigateToHome(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('credenciales').then(function(testdata){
            this.testdata = testdata
        cy.login(this.testdata.username,this.testdata.password) // Codigo para cargar credenciales  "Username" y "passoword" mediante un json 
        })
    }

    checkCookies(){
        cy.getCookies('orangehrm').should('exist')
        cy.getCookies().should('have.length',2).then((cookies)=>{ // Con esta funcion probamos la existencia y validacon de una cookie en nuestra web
            expect(cookies[0]).to.have.property('name','orangehrm') 
        })
    }

    checkLinksNav(){
        cy.fixture('home').then((home)=>{
            cy.get(home.menuItems).should('have.length',11)
        })
    }

    checkLinksAdmin(){
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.get(home.linkSupAdmin).should('have.length', 5)
        })
    }

    headerText(text){
        cy.fixture('home').then((home)=>{
            cy.headerText(text)
            cy.get(home.userMenu).should('exist')
        })  
    }

    adminClick(){
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
        })
        
    }

    searchUser(userName,name,userRol,userStatus){
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.searchUser(userName,name)
            cy.get(home.adminSelectBtn).click()
            cy.contains('[role="option"]', `${userRol}`).click() 
            cy.get(home.statuSelectBtn).click()
            cy.contains('[role="option"]', `${userStatus}`).click() 
            cy.get(home.searchBtn).click({ force: true })
            
        })
    }

    alertTextSearch(){
        cy.get('.oxd-toast').should('be.visible').contains('No Records Found')
    }

    checkUser(){
        cy.contains('Admin').click()
        cy.checkUser('Fiona Grace')
        // cy.checkUser('Anthony Nolan')
    }
 
}

export default SeccionAdmin
class SeccionPim {

    navigateToHome(user,pass){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.login(user,pass)
    }

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    
    credenciales(user,pass){
        cy.login(user,pass)
    }

    adminClicks(){
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder1).click()
            cy.get(home.linksup1).click()
            cy.get(home.linksup2).click()
            cy.get(home.linksup3).click()
            cy.get(home.linksup4).click()
            cy.get(home.linksup5).click()
        })  
    }

    searchCheck(user){
        cy.fixture('home').then((home)=>{
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()
            cy.get(home.inputSearch).type(user).clear()            
        })  
    }

    seccionPim(){
        cy.fixture('home').then((home)=>{
            cy.get(home.navbtnder2).click()
            cy.get(home.linksup6).click()
            cy.get(home.linksup7).click()
            cy.get(home.linksup8).click()
            cy.get(home.linksup9).click()    
        }) 
    }
}

export default SeccionPim
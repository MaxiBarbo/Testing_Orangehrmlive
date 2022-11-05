class IndexItems{ 

    navigatePage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    CheckLogin(){
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
    }
    
    incorrectLogin(user,pass){
        cy.login(user,pass)
        cy.get('.oxd-alert').contains('Invalid credentials')
    }

    verifyItems = (items) => {
        cy.fixture('local.json').then((locator)=>{
            cy.get(locator.banner).should(items)
            cy.get(locator.logo).should(items)
            cy.get(locator.iconos).should(items)
            cy.get(locator.loginText).should(items)
            cy.get(locator.userText).should(items)
            cy.get(locator.passText).should(items)
            cy.get(locator.iconoPass).should(items)
            cy.get(locator.iconoUser).should(items)
            cy.get(locator.btnLogin).should(items)
            cy.get(locator.linkForgot).should(items)
        })     
    }

    
}

export default IndexItems
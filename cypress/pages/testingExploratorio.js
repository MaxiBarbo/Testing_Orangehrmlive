
class Home {

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    
    credenciales(user,pass){
        cy.login(user,pass)
    }

    checkCookies(){
        cy.getCookies('orangehrm').should('exist')
        
    }

    checkCookiesData(name,page){
        cy.getCookies().should('have.length',1).then((cookies)=>{ // Con esta funcion probamos la existencia y validacon de una cookie en nuestra web
            expect(cookies[0]).to.have.property(name,page) // "name", "orangehrm"
        })
    }

    checkTextAlert(text){
        cy.fixture('local').then((local)=>{
            cy.get(local.checkAlertText1).should('contain',text)
            cy.get(local.checkAlertText2).should('contain',text)
        })
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

    logout(){
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }

}

export default Home
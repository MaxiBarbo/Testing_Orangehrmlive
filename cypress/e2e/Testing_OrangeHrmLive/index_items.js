class indexitems{ 

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

export default new indexitems
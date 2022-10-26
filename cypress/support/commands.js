// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


Cypress.Commands.add('login', (user, password) => { // Comando para Iniciar session
    cy.fixture('local').then((local)=>{
        cy.get(local.userInput).type(user)
        cy.get(local.passInput).type(password)
        cy.get(local.btnLogin).click()
    })
  })
 
Cypress.Commands.add('searchUser',(nameUser,EmployName)=>{ // Comando para agregar texto en Inputs seccion Admin
    cy.fixture('home').then((home)=>{
        cy.get(home.text1).type(nameUser)
        cy.get(home.text2).type(EmployName)
    })
}) 

Cypress.Commands.add('headerText',(seccion) => {
    cy.fixture('home').then((home)=>{
        cy.get(home.headerText).should('have.text', seccion)
    })
})

//
// 
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
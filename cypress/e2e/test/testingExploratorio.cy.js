
import Home from '../../pages/testingExploratorio';

const home = new Home

describe('Casos de Prueba en Login', () => {

    beforeEach(() => {    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Check Elementos existentes', () => { // Resultado Esperado: Test de todos los elementos sean visibles y existentes en el DOM

        home.verifyItems('exist')
        
    });

    it('Validamos las Cookies', () => { // Resultado Esperado: Las canitdad y existencia de cookies sean las correctas

        home.checkCookies() // Validamos la existencia de cookies
        home.checkCookiesData('name','orangehrm') // Validamos el name de la o las Cookies
        
    });

    it('Ingreso de credenciales Incorrectas', () => { // Resultado Esperado: Aviso mediante un mensaje en pantalla el Resultado del Login

        home.credenciales('juan','1234') // Ingresamos credenciales no registradas  
        cy.get('.oxd-alert').contains('Invalid credentials').should('exist') // Validamos el Mensaje de Alerta al no poder Ingresar

    });
    
    it('Ingreso con campos User y Pass vacios', () => { //Resultado esperado: Aviso con mensaje en pantalla mostrando texto "Required" en campos mencionados

        cy.get('.oxd-button').click()
        home.checkTextAlert('Required')  // Check text alert en Username y Password

    });

    it('Ingreso con credenciales Correctas', () => { // Resultado esperado: Ingreso a platafroma con credenciales correctas y luego crealizamos un logout
        
        home.credenciales('Admin','admin123') // Ingresamos credenciales correctas de registro
        home.logout() // Realizamos un Logout

    });
    
    
});
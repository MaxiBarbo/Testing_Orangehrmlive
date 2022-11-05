import SeccionAdmin from '../../pages/adminSeccionClass'

const home = new SeccionAdmin


describe('Seccion Admin en menu de navegacion lateral', () => {

    beforeEach(() => {    
        home.navigateToHome()
        home.checkCookies()  
    })

    it('Existencia de Links en Menu de Navegacion lateral derecho', () => { // Se comprueba la totalidad de existencia de los links en el menu de navegacion derecho 
        home.checkLinksNav()
    })  

    it('Existencia de Links en Menu de navegacion superior en seccion Admin', () => { // Se comprueba la totalidad de exixtencia de los links en el menu de navegacion superior en seccion Admin
        home.checkLinksAdmin()
    })

    it('Texto Correcto en Header segun seccion', () => { // Se comprueba texto en header indicando seccion
       home.adminClick() 
       home.headerText('AdminUserus Management')
    })

    it('Buscar usuario Inexistente, User Rol: Admin y Status: Enable', () => {   // Caso de Prueba para buscar Usuario existente con "User Rol = Admin" y "Status = Enable"
        home.searchUser('Mono','Mario','Admin','Enabled')
        home.alertTextSearch()
    })

    it('Buscar usuario Existente, User Rol: Admin/ESS y Status: Enable', () => {   // Caso de Prueba para buscar Usuario existente con "User Rol = Admin" y "Status = Enable"
      home.searchUser('Admin','Pauli','Admin','Enabled')
      home.searchUser('Alice Duval','Alice Duval','ESS','Enabled')

    })

    it('Realizar un Check buscando un usuario en una tabla dinamica', () => { // Con esta funcion buscamos un usuario denro de la tabla y realizar el check solo Ubicado por nombre
        home.checkUser()
    })

}) 


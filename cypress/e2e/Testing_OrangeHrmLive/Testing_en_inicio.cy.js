import IndexItems from '../../pages/index_items'

const homeIndex = new IndexItems

describe('Testing en pagina Login', () => {

    beforeEach(() => {
        homeIndex.navigatePage()
    })

    it('Login Campos Vacios', () => { // Se prueba Login mediante un caso de prueba Negativo dejando campos de datos vacios
       homeIndex.CheckLogin()
    })

    it('Login Credenciales Incorrectas', () => { // Se prueba Login mediante un caso de prueba Negativo (Se busca no poder realizar Login)
        homeIndex.incorrectLogin('lalo','landa')
    })
 
    it('Check Items Login', () => {
        homeIndex.verifyItems('exist')// Checkeamos que esten visibles todos los elementos en el Login utilizando Pages Object mediante .Json
        
    })


})
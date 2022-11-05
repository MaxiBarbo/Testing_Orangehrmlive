import SeccionPIM from '../../pages/pimSeccionClass'
import SeccionAdmin from '../../pages/adminSeccionClass'

const home = new SeccionPIM
const homeAdmin = new SeccionAdmin

describe('Testing Seccion PIM', () => {
    
    beforeEach(() => {
        home.navigateToHome('Admin','admin123')
    })

    it('Despliegue Links Menu de navegacion superior Admin', () => {     
        home.adminClicks()
    }) 

    it('Despliegue Links Menu de navegacion superior PIM', () => {
        home.seccionPim()
    }); 

    it('Texto Correcto en Header segun seccion', () => {
        homeAdmin.headerText('PIM')
    });

    it('Buesqueda por items en Menu de navegacion lateral derecho', () => {
        home.searchCheck('admin','pim','leave','time','recruitment','my info','performance','dashboard','directory','maintenance','buzz')  
    });
  
});
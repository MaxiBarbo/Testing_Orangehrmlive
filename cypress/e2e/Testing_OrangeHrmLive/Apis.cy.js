describe('Pruebas varias en Apis', ()=>{

    it('Probamos endpoint POST con status 200', ()=>{
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
    })

    it('Probamos endoponit Posts y su cantidad de entradas', () =>{ // probamos la canitad de post en total que tiene el endpoint
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
        .its('body')
        .should('have.length',100)
    })

    it('Probar los titulos de Post numero 1 en la pagina typi code', ()=>{ // probamos el contenido del  titulo del post n°15 de la api
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/15')
        .its('body')
        .should('have.property','title','eveniet quod temporibus')
    })

    it('Prueba de endpoint enviando un Post ', ()=>{
        cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
          userId: 2,
          id:222,
          title: 'Enviamos un Codigo 222',
          body: 'si todo salio bien, pudimos enviar el codigo 222',
        }).then((respuesta)=>{
            expect(respuesta.body).to.have.property('body','si todo salio bien, pudimos enviar el codigo 222')
        })
    })
})
describe('Prueba Happy Path', () => {
  beforeEach(() => {
    // Visitar la página web antes de cada prueba
    cy.visit('https://testing1.geekqa.net/');
  });

  it('Selecciona y personaliza una pizza, y realiza un pedido exitoso', () => {
    // Seleccionar tamaño de pizza (por ejemplo, mediana)
    cy.get('#medium').check().should('be.visible')
    
    // Seleccionar tipo de masa (por ejemplo, gruesa)
    cy.get('#thick').check().should('be.visible')
    
    // Seleccionar ingredientes (por ejemplo, champiñones y pepperoni)
    cy.get('#mushrooms').check().should('be.visible')
    cy.get('#pepperoni').check().should('be.visible')
    
    // Verificar la previsualización de la pizza
    cy.get('.preview-box').should('contain', 'Mediana').and('contain', 'Gruesa').and('contain', 'Champiñones').and('contain', 'Pepperoni');

    // Ingresar los detalles de pedido
    cy.get('#name').type('John Doe');
    cy.get('#address').type('123 Main St');
    cy.get('#phone').type('0115257485');
    cy.get('#email').type('johndoe@example.com');
    
    // Enviar el formulario de pedido
    cy.get('[type="submit"]').click()
    
    // Verificar que se redirige a una página de confirmación de pedido
    cy.url().should('not.eq', 'https://testing1.geekqa.net/order-confirmation');
    
  });

    //verificaciones y validaciones
    it('Validaciones de campos', () => {

      cy.get('#name').should('be.visible');
      cy.get('#email').should('be.enabled');
            cy.get('#name').type('John Doe');
      cy.get('#name').should('have.value', 'John Doe');
      cy.get('#email').type('correo_invalido');
      cy.get('#address').type('dir_invalida');
      cy.get('#phone').type('telefono invalido')






    })
});
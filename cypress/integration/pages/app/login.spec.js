// <reference types="cypress" />
describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    cy.visit('/app/login/');

    cy.get('#formLogin input[name="usuario"]').type('omariosouto');

    cy.get('#formLogin input[name="senha"]').type('senhasegura');

    cy.get('#formLogin button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });
});

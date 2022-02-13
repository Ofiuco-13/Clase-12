/// <reference types="Cypress" />

const URL = "http://127.0.0.1:5500/Clase-12/index.html";

describe("Testea el conversor de moneda", () => {
  before(() => {
    cy.visit(URL);
  });

  it("verifica que se haga el cambio de monedas", () => {
    cy.get("#cuantity").type(456);
    cy.get(".currency").eq(0).select(1);
  });
});

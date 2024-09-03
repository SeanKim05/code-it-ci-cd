describe("Basic page checks", () => {
  beforeEach(() => {
    cy.visit("/"); // Cypress will prepend this with the baseUrl
  });

  it('should have "Get started by" text on the home page', () => {
    cy.contains("Get started by").should("exist");
  });

  it('should have "Docs" anchor with correct href', () => {
    cy.get("a")
      .contains("Docs")
      .should("exist")
      .and("have.attr", "href")
      .and("eq", "/docs");
  });
});

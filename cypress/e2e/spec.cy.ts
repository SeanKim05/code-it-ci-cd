describe("Home Page Tests", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/");
  });

  it('should display "Get started by" text on the home page', () => {
    // Check if the text "Get started by" is present on the page
    cy.contains("Get started by").should("be.visible");
  });

  it("should have an <a> tag with an href attribute", () => {
    // Find the <a> tag containing an <h2> with the text "Docs" and check that it has an href attribute
    cy.contains("h2", "Docs")
      .parent("a") // Get the parent <a> tag of the <h2> with text "Docs"
      .should("have.attr", "href"); // Check that this <a> tag has an href attribute
  });
});

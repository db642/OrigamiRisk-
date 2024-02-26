describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Should have no accessibility violations", () => {
    cy.checkA11y();
  });
});

describe("Accessibility", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Should have no accessibility violations on main page", () => {
    cy.checkA11y();
  });
});

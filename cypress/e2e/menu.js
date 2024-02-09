import dashboardPage from "../fixtures/page_objects/dashboard.page";
import platformMenuItems from "../fixtures/test_data/platformMenuItems.json"

describe("Platform menu navigation", () => {
    beforeEach(() => {
      cy.visit("/");
    });

it("verifies Platform Overview tab existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.overview).click({ force: true });
    cy.url().should("include", "origami-platform-overview");
  });

  it("verifies Configuration existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.configuration).click({ force: true });
    cy.url().should("include", "configuration-customization");
  });

  it("verifies Digital Engagement existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.digitalEngagement).click({ force: true });
    cy.url().should("include", "digital-engagement");
  });

  it("verifies Cloud Architecture existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.cloudArchitecture).click({ force: true });
    cy.url().should("include", "cloud-architecture");
  });

  it("verifies Implementation & Support existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.implementationSupport).click({ force: true });
    cy.url().should("include", "implementation-support");
  });
  it("verifies P&C Claims Administration Solutions existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.claimsAdministrationSolutions).click({ force: true });
    cy.url().should("include", "claims-administration-system");
  });
  it("verifies P&C Policy Administration & Billing Solutions existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.policyAdministrationBillingSolutions).click({force: true,});
    cy.url().should("include", "policy-administration");
  });
  it("verifies Environment, Health & Safety (EHS) existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.EHS).click({ force: true });
    cy.url().should("include", "environment-health-safety");
  });
  it("verifies Governance, Risk & Compliance (GRC) existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.GRC).click({ force: true });
    cy.url().should("include", "governance-risk-and-compliance-grc-solution");
  });
  it("verifies Healthcare existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.healthcare).click({ force: true });
    cy.url().should("include", "healthcare-risk-safety-platform");
  });
  it("verifies Risk Management Information Systems (RMIS) existence", () => {
    dashboardPage.platformTab.trigger("mouseover");
    cy.contains(platformMenuItems.RMIS).click({force: true,});
    cy.url().should("include", "risk-management-information-system-rmis");
  });
});

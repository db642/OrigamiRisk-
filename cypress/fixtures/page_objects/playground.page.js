class PlaygroundPage {
  get matchesMenuButton() {
    return cy.get('[href*="/matches?"]');
  }

  get goToCountryButton() {
    return cy.get('.table__menu');
  }

  get goToCityButton() {
    return cy.get('.table__menuItem');
  }

  get addPlaygroundButton() {
    return cy.get('[type="submit"]');
  }

  get districtDropDown() {
    return cy.get('.Select_select__gLGTN');
  }

  get addressInput() {
    return cy.get('[name="addressString"]');
  }

  get cityMap() {
    return cy.get('[class="map"]');
  }

  get playgroundTitleField() {
    return cy.get('[placeholder="Введите название');
  }

  get firstPlaygroundInTable() {
    return cy.get('.cities >.table__row:nth-child(1)');
  }

  get playgroundsDataField() {
    return cy.get('#__next');
  }
}

export default new PlaygroundPage();

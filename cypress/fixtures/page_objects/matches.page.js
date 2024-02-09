class MatchesPage {
  //Match table
  get cancelMatchCommentInputField() {
    return cy.get('[placeholder="Оставьте комментарий"]');
  }

  get overlayPage() {
    return cy.get('[class="overlay"]');
  }

  get matchTableContentCountry() {
    return cy.get('.table__content > .table__row :nth-child(3)');
  }

  get matchTableContentId() {
    return cy.get('.table__content > .table__row:first-child > :nth-child(1)');
  }

  get matchTableContentStatus() {
    return cy.get('.table__content > .table__row:first-child > :nth-child(2)');
  }

  get matchTableContentCity() {
    return cy.get('.table__content > .table__row :nth-child(4)');
  }

  get matchTableContentDistrict() {
    return cy.get('.table__content > .table__row :nth-child(5)');
  }

  get filterDropDownMenuButton() {
    return cy.get('[class*="Select_select__gLGTN"]');
  }

  get filterDropDownMenuItems() {
    return cy.get('[class*="Select_select__items"]');
  }

  get matchesTableRow() {
    return cy.get('[class*="table__row"]');
  }

  get matchCardStatus() {
    return cy.get('[class*="table__row"]');
  }

  get selectGoToMatchOption() {
    return cy.get('.table__menuItem').contains('Перейти к матчу');
  }

  removeOverlay() {
    this.overlayPage.click();
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
  }

  // Match Information page
  get inputRow() {
    return cy.get('.between-row');
  }

  get eventDateInputLocator() {
    return cy.get('[name="date"]');
  }

  get eventCalendarDayInputLocator() {
    return cy.get('.rdrDay').not('.rdrDayPassive');
  }

  get eventTimeInputLocator() {
    return cy.get('[name="time"]');
  }

  get dropDownMenuRowLocator() {
    return cy.get('[class="row"]');
  }

  get playgroundInputLocator() {
    return cy.get('[name="playground"]');
  }

  get parentFormatInputLocator() {
    return cy.contains('p', 'Родительский формат').parents('.between-row').siblings('input[name="format"]');
  }

  get matchLengthInputLocator() {
    return cy.get('[name="length"]');
  }

  get coveringInputLocator() {
    return cy.get('[name="covering"]');
  }

  get coatingInputLocator() {
    return cy.get('[name="coating"]');
  }

  get coatingInputLocator() {
    return cy.get('[name="coating"]');
  }

  get totalPlacesInputLocator() {
    return cy.contains('p', 'Мест всего (указано Орг-ом)').parents('.between-row').siblings('input[type="number"]');
  }

  get playgroundPriceInput() {
    return cy.get('[name="playgroundPrice"]');
  }

  selectNewDate(date) {
    this.eventDateInputLocator.click();
    this.eventCalendarDayInputLocator.contains(date).click();
  }

  selectNewTime(time) {
    this.eventTimeInputLocator.click();
    this.dropDownMenuRowLocator.contains(time).click();
  }

  selectNewPlayground(playground) {
    this.playgroundInputLocator.click();
    this.dropDownMenuRowLocator.contains(playground).click();
  }

  selectNewParentalFormat(parentalFormat) {
    this.parentFormatInputLocator.click();
    this.dropDownMenuRowLocator.contains(parentalFormat).click();
  }

  selectNewMatchLength(length) {
    this.matchLengthInputLocator.click();
    this.dropDownMenuRowLocator.contains(length).click();
  }

  selectNewCovering(coveringType) {
    this.coveringInputLocator.click();
    this.dropDownMenuRowLocator.contains(coveringType).click();
  }

  selectNewCoating(coating) {
    this.coatingInputLocator.click();
    this.dropDownMenuRowLocator.contains(coating).click();
  }

  selectNewTotalPlaces(totalPlaces) {
    this.totalPlacesInputLocator.click();
    this.dropDownMenuRowLocator.contains(totalPlaces).click();
  }
}
export default new MatchesPage();

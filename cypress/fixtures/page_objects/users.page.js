const commonLocatorsList = require('../../fixtures/test_data/dictionary/commonLocatorsList.json');

class UsersPage {
  get searchInputField() {
    return cy.get('.CommonInput_input__1a_v4');
  }

  get nationalityAndCitiesDropDownItems() {
    return cy.get('[class*="Select_select__items"]');
  }

  get nationalityDropDownButton() {
    return cy.contains('Национальность');
  }

  get cityDropDownButton() {
    return cy.contains('Город');
  }

  //Users table
  get usersTableRow() {
    return cy.get('[class*="table__row"]');
  }

  get usersTableFirstRow() {
    return cy.get('[class="table__row false"]:first');
  }

  get userTableContentName() {
    return cy.get('.table__content > .table__row > :nth-child(2)');
  }

  get userTableContentPhoneNumber() {
    return cy.get('.table__content > .table__row:first-child > :nth-child(3)');
  }

  get userTableContentRegistrationDate() {
    return cy.get('.table__content > .table__row > :nth-child(4)');
  }

  get userTableContentNationality() {
    return cy.get('.table__content > .table__row > :nth-child(5)');
  }

  get userTableContentCity() {
    return cy.get('.table__content > .table__row > :nth-child(6)');
  }

  get userTableContentPosition() {
    return cy.get('.table__content > .table__row > :nth-child(7)');
  }

  get viewUserProfileMenuButton() {
    return cy.get('[class="table__menuItem"]').first();
  }

  get userTableContentEmail() {
    return cy.get('.table__content > .table__row > :nth-child(17)');
  }

  get userTableNumberOfOrganizedMatches() {
    return cy.get('.table__content > .table__row:first-child > :nth-child(19)');
  }

  get userTableNumberOfMatchesInProcess() {
    return cy.get('.table__content > .table__row:first-child > :nth-child(20)');
  }

  // User card
  get userCardFirstNameInput() {
    return cy.get('[placeholder="Имя"]');
  }

  get userCardLastNameInput() {
    return cy.get('[placeholder="Фамилия"]');
  }

  get userCardPhoneNumberInput() {
    return cy.get('[placeholder="Номер телефона"]');
  }

  get userCardDateOfRegistrationInput() {
    return cy.get('[placeholder="Дата регистрации"]');
  }

  get serviceCommissionUSDInput() {
    return cy.get('[name="serviceComUSD"]');
  }

  get userCardNationalityInput() {
    return cy.get('[placeholder="Национальность"]');
  }

  get conformAdminButton() {
    return cy.get('.modal .SubmitButton_button__JpaGS:not(.borderButton)');
  }

  get userCardUsersCheckBoxSection() {
    return cy.get('.whiteBlock .borderButton__red');
  }

  get userCardCountriesAndCitiesCheckBoxSection() {
    return cy.get('.modal .borderButton');
  }

  get userCardAdminPermissionApplyButton() {
    return cy.get('[class*="SubmitButton_button__JpaGS modal__button"]');
  }

  get userCardAccountEmailInput() {
    return cy.get('[placeholder="Введите E-mail"]');
  }

  get userCardAccountPasswordInput() {
    return cy.get('[placeholder="Введите Пароль для Администратора"]');
  }

  get userCardRemoveAdminRoleButton() {
    return cy.get('[class*="SubmitButton_button__JpaGS borderButton"]');
  }

  get userCardEditAccessButton() {
    return cy.get('[class*="SubmitButton_button__JpaGS centeredBlock__select"]');
  }

  get makeAdminButton() {
    return cy.get('[class*="SubmitButton_button__JpaGS centeredBlock__select"]');
  }

  get makeOrganizerButton() {
    return cy.get('[class="SubmitButton_button__JpaGS darkButton centeredBlock__select mb20"]');
  }

  get userCardNumberOfOrganizedMatches() {
    return cy.get('[placeholder="Кол-во организованных матчей (всего)"]');
  }

  get userCardNumberOfMatchesInProgress() {
    return cy.get('[placeholder="Кол-во матчей в процессе"]');
  }

  searchUser(keyword) {
    this.searchInputField.type(keyword);
    this.searchInputField.type('{enter}');
  }

  selectNationality(nationality) {
    this.nationalityDropDownButton.click();
    this.nationalityAndCitiesDropDownItems.scrollTo('bottom').contains(nationality).click({ force: true });
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
  }

  selectCity(city) {
    this.cityDropDownButton.click();
    this.nationalityAndCitiesDropDownItems.scrollTo('bottom').contains(city).click({ force: true });
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 });
  }

  updateToAdminRole(email, password) {
    this.userCardAccountEmailInput.type(email);
    this.userCardAccountPasswordInput.type(password);
    this.makeAdminButton.click();
    this.conformAdminButton.click();
  }

  removeAdminRole() {
    this.userCardRemoveAdminRoleButton.click();
    cy.contains(commonLocatorsList.yesButton).click();
  }
}

export default new UsersPage();

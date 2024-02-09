class LoginPage {
  get emailInput() {
    return cy.get('[name="email"]');
  }

  get passwordInput() {
    return cy.get('[name="password"]');
  }

  get loginButton() {
    return cy.get('.darkButton');
  }

  get exitButton() {
    return cy.get('[class="Navbar_navbar__logout___Qq6e"]');
  }

  get logOutButton() {
    return cy.get('.errorButton');
  }

  get errorMessageText() {
    return cy.get('.swal-text');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  logout() {
    this.exitButton.click();
    this.logOutButton.click();
  }
}

export default new LoginPage();

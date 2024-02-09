class DashboardPage {
  get platformTab() {
    return cy.get('.menu.menu-level-0').eq(0);
  }
  get requestDemoBtn(){
    return cy.contains('Get a Demo')
  }
}
export default new DashboardPage();

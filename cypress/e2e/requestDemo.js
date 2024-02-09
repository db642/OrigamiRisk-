import dashboardPage from "../fixtures/page_objects/dashboard.page";
import requestDemoForm from "../fixtures/page_objects/requestDemo.form";
import { generateUserData } from "../helpers/fakerData";
let userData;
userData = generateUserData();
const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand()

describe("Demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Request Demo", () => {
    dashboardPage.requestDemoBtn.click();
    cy.wait(1000)
    requestDemoForm.firstNameInp.type(userData.firstName);
    requestDemoForm.lastNameInp.type(userData.lastName);
    requestDemoForm.emailInp.type(userData.email);
    requestDemoForm.companyInp.type(userData.company);
    requestDemoForm.commentInp.type(
      "Hi, My name is Daria. I have created a test automation framework from scratch for your open position. GitHub Actions set up. Let`s discuss further if interested. "
    );
    //cy.get('[type="submit"]').click() commenting out to spare the team from spam unless I'm hired. 
  });
});

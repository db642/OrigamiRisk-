class requestDemoForm {
    get firstNameInp(){
        return cy.get('[name="FirstName")]')
    }
    get lastNameInp(){
      return cy.get('[name="LastName"]')
    }
    get emailInp(){
      return cy.get('[name="Email"]')
    }
    get companyInp(){
      return ccy.get('[name="Company"]')
    }
    get commentInp(){
      return cy.get('[name="commentCapture"]')
    }
    get submitInp(){
      return cy.get('[type="submit"]')
    } 
  }
  export default new requestDemoForm();
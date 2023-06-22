describe("MyTommyUserRegistrationAndChatWithTwoUsers", () => {
  it("tests MyTommyUserRegistration", () => {
    cy.viewport(1404, 834);
    cy.visit("https://app.mytommy.com/");
    cy.contains('Login with email').click();
    cy.get("div.login-screen form > div input").type(Cypress.env('email1'));
    cy.get("div.login-screen i").click();
    cy.get("form > a").click();
    cy.get("input.input-focused").type("1");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("7");
    cy.get("#registration-confirm-code form > a").click();
    cy.get("div.grid > div:nth-of-type(1) input").type("test");
    cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
    cy.get("#registration-details > div.page-content a").click();
    cy.get(".fa-icon.fa-light.fa-square-arrow-left").click();
    cy.get(".dialog-button.button-ok").click();
    cy.reload()
    cy.visit("https://app.mytommy.com/");
    cy.contains('Login with email').click();
    cy.get("[placeholder='Enter email']").type(Cypress.env('email2'));
    cy.get("div.login-screen i").click();
    cy.get("form > a").click();
    cy.get("input.input-focused").type("1");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("7");
    cy.get("#registration-confirm-code form > a").click();
    cy.get("div.grid > div:nth-of-type(1) input").type("test");
    cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
    cy.get("#registration-details > div.page-content a").click();
    cy.get(".link.icon-only.popover-open").click();
    cy.get(".fa-icon.fa-light.fa-user-plus").click();
    cy.get("div.page-add-contact > form input").click();
    cy.get("div.page-add-contact > form input").type(Cypress.env('email1'));
    cy.wait(2500)
    cy.get("div.contacts-list i").click();
    cy.get("div.dialog span:nth-of-type(2)").click();
    cy.get(".dialog-button.button-ok").click();
    cy.get("div.page-master div.item-inner span").click();
    cy.get("div.profile-header i").click();
    cy.get("[placeholder='Message']").type("testmessage");
    cy.get("#framework7-root > div.view div.toolbar a").click();
    cy.get(".fa-icon.fa-light.fa-square-arrow-left").click();
    cy.get(".dialog-button.button-ok").click();
    

   //Automatically capture screenshots & videos on failure - only when execute through CLI
    
  });
});
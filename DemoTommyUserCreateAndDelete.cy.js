describe("UserCreationAndDelete", () => {
    it("tests UserCreationAndDelete", () => {
      cy.viewport(1097, 856);
      cy.visit("https://app.mytommy.com/#/registration/");
      cy.get("div.login-screen p > a").click();
      cy.get("div.login-screen form > div input").click();
      cy.get("div.login-screen form > div input").type(Cypress.env('email1'));
      cy.get("div.login-screen i").click();
      cy.get("div.login-screen div.page-content a > span").click();
      cy.get("input.input-focused").type("1337");
      cy.get("#registration-confirm-code form > a").click();
      cy.get("div.grid > div:nth-of-type(1) input").type("test");
      cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
      cy.get("#registration-details > div.page-content a").click();
      cy.wait(2500)
      cy.get("#user-info").click();
      cy.get(".fa-icon.fa-light.fa-lock").click();
      cy.get('[data-cy="account-security-tommy-account-list-item"]').click();
      cy.get('[data-cy="account-tommy-delete-account-first-name-input"]').type("test");
      cy.get('[data-cy="account-tommy-delete-account-last-name-input"]').type("user");
      cy.get('[data-cy="account-tommy-delete-account-enter-delete-input"]').type("DELETE");
      cy.get('[data-cy="account-tommy-delete-account-delete-button"]').click();
      cy.get(".dialog-button.button-ok").click();


       //Automatically capture screenshots & videos on failure - only when execute through CLI
      
      




    });
});


      
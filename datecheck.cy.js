describe("TommyUSerOnboardingAndTestteamCreation", () => {
    it("tests TommyUSerOnboardingAndTestteamCreation", () => {
      cy.viewport(1097, 856);
      cy.visit("https://app.mytommy.com/#/registration/");
      cy.get("div.login-screen p > a").click();
      cy.get("div.login-screen form > div input").click();
      cy.get("div.login-screen form > div input").type(Cypress.env('email1'));
      cy.get("div.login-screen i").click();
      cy.get("div.login-screen div.page-content a > span").click();
      cy.get("input.input-focused").type("1");
      cy.get("input.input-focused").type("3");
      cy.get("input.input-focused").type("3");
      cy.get("input.input-focused").type("7");
      cy.get("#registration-confirm-code form > a").click();
      cy.get("div.grid > div:nth-of-type(1) input").type("test");
      cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
      cy.get("#registration-details > div.page-content a > span").click();
      cy.get("button button-fill create-team-button button-brand panel-close mb-10").click();

      
      




 
  });
});

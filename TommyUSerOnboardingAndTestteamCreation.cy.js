describe("UserOnboardingAndTeamCreation", () => {
  it("UserOnboardingAndTeamCreation", () => {
    cy.viewport(1404, 834);
    cy.visit("https://app.mytommy.com/");
    cy.contains('Login with email').click();
    cy.get("div.login-screen form > div input").type(Cypress.env('email1'));
    cy.get("div.login-screen i").click();
    cy.get("form > a").click();
    cy.get("input.input-focused").type("1337");
    cy.get("#registration-confirm-code form > a").click();
    cy.get("div.grid > div:nth-of-type(1) input").type("test");
    cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
    cy.get("#registration-details > div.page-content a").click();
    cy.wait(3500)
    cy.get(".teams-tab-link").click();
    cy.wait(3500)
    cy.get('#sidebar-teams-tab [data-cy="sidebar-create-team-button"]').click();
    cy.get('[data-cy="create-team-select-essentials-plan-button"]').click();
    cy.get("[placeholder='Enter team name...']").type("testteam");
    cy.get("#framework7-root > div.view i").click();
    cy.get("#framework7-root > div.view div.large-grid-cols-2 a").click();
    cy.get("div.item-input-focused input").click();
    cy.get("div.item-input-focused input").type("testloaction");
    cy.get("[placeholder='Enter location address...']").type("testaddress");
    cy.get('[data-cy="create-team-locations-next-button"]').click();
    cy.get("[placeholder='Enter role name...']").type("testrole");
    cy.get('[data-cy="create-team-roles-next-button"]').click();
    cy.get("[placeholder='Enter skill name...']").type("testskill");
    cy.get("#framework7-root > div.view > div.page-current div.large-grid-cols-2 a").click();
    cy.wait(2500)
    cy.get("#framework7-root > div.view > div.page-current > div.page-content a > span").click();
      
      
     
      





    });
});

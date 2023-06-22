describe("Tommy Shift Creation and Time Clocking", () => {
  it("tests Tommy Shift Creation and Time Clocking", () => {
    cy.viewport(1097, 856);
    cy.visit("https://app.mytommy.com/#/registration/");
    cy.get("div.login-screen p > a").click();
    cy.get("div.login-screen form > div input").click();
    cy.get("div.login-screen form > div input").type("20230620cypresstestuser1@tommytest.com");
    cy.get("div.login-screen div.page-content > div").click();
    cy.get("div.login-screen i").click();
    cy.get("div.login-screen form > a").click();
    cy.get("input.input-focused").type("1");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("7");
    cy.get("#registration-confirm-code > div.page-content a > span").click();
    cy.get("div.grid > div:nth-of-type(1) input").type("test");
    cy.get("form > div.grid > div:nth-of-type(2) input").click();
    cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
    cy.get("#registration-details > div.page-content a > span").click();
    cy.get("div.panel div.item-inner a").click();
    cy.get("#user-settings > div:nth-of-type(2) div.item-inner").click();
    cy.get("span.button-ok").click();
    cy.reload()
    cy.get("div.login-screen p > a").click();
    cy.get("div.login-screen form > div input").click();
    cy.get("div.login-screen form > div input").type("20230620cypresstestuser3@tommytest.com");
    cy.get("div.login-screen label > label").click();
    cy.get("div.login-screen div.page-content a > span").click();
    cy.get("input.input-focused").type("1");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("7");
    cy.get("#registration-confirm-code > div.page-content a > span").click();
    cy.get("div.grid > div:nth-of-type(1) input").type("test");
    cy.get("form > div.grid > div:nth-of-type(2) input").type("user");
    cy.get("#registration-details > div.page-content a").click();
    cy.get("#sidebar-menu-tab div:nth-of-type(2) > a").click();
    cy.get("div.view div.page-content > div > div > div:nth-of-type(2) > div:nth-of-type(1) span").click();
    cy.get("div.item-input-focused input").click();
    cy.get("div.item-input-focused input").type("testteam");
    cy.get("#framework7-root > div.view i").click();
    cy.get("#framework7-root > div.view div.large-grid-cols-2 a").click();
    cy.get("div.item-input-focused input").type("testlocation");
    cy.get("#framework7-root > div.view > div.page-current div.large-grid-cols-2 a").click();
    cy.get("#framework7-root > div.view > div.page-current input").click();
    cy.get("#framework7-root > div.view > div.page-current input").type("testrole");
    cy.get("#framework7-root > div.view > div.page-current div.large-grid-cols-2 a").click();
    cy.get("#framework7-root > div.view > div.page-current input").click();
    cy.get("#framework7-root > div.view > div.page-current input").type("testskill");
    cy.get("#framework7-root > div.view > div.page-current div.large-grid-cols-2 a").click();
    cy.get("#framework7-root > div.view > div.page-current > div.page-content a > span").click();
    cy.get("#sidebar-menu-tab li:nth-of-type(3) div.item-inner").click();
    cy.get("div.right > a").click();
    cy.get("div.transparent > div:nth-of-type(1) input").click();
    cy.get("div.item-input-focused input").type("test");
    cy.get("div.item-input-focused input").type("user");
    cy.get("div.transparent > div:nth-of-type(3) input").click();
    cy.get("div.item-input-focused input").type("20230620cypresstestuser1@");
    cy.get("div.item-input-focused input").type("20230620cypresstestuser1@tommytest.com");
    cy.get("div.popup div.toolbar a").click();
    cy.visit("https://app.mytommy.com/#/team/");
    cy.get("#sidebar-menu-tab li:nth-of-type(4) div.item-inner").click();
    cy.get("div.addon-activation-grid-container a > span > span").click();
    cy.get("div.tabs-animated-wrap li:nth-of-type(7) div.item-inner").click();
    cy.get("div.addon-activation-grid-container a > span > span").click();
    cy.get("div.right > a.link").click();
    cy.get("ul > div:nth-of-type(1) div.multiselect__tags").click();
    cy.get("div.item-input-focused div.tag-icon").click();
    cy.get("div.item-input-focused div.item-input-wrap > div").click();
    cy.get("div.item-input-focused li:nth-of-type(1) div.tag-icon > i").click();
    cy.get("div.page-content > div > ul > li:nth-of-type(1) span").click();
    cy.get("li:nth-of-type(2) div.item-input-wrap > div").click();
    cy.get("tr:nth-of-type(2) i").click();
    cy.get("div.sheet-modal span").click();
    cy.get("#framework7-root > div.popup > div.page a > span > span").click();
    cy.visit("https://app.mytommy.com/#/scheduling/");
    cy.get("#scheduling__index div.right > a.button-fill > span").click();
    cy.get("div.popup a.button-fill > span > span").click();
    cy.get("div.item-inner a").click();
    cy.get("#user-settings > div:nth-of-type(2) div.item-inner").click();
    cy.get("span.button-ok").click();
    cy.location("href").should("eq", "https://app.mytommy.com/#/time-clock/overview/");
    cy.get("p > a").click();
    cy.get("form > div input").click();
    cy.get("form > div input").type("20230620cypresstestuser1@");
    cy.get("form > div input").type("20230620cypresstestuser1@tommytest.com");
    cy.get("div.login-screen i").click();
    cy.get("form > a").click();
    cy.get("input.input-focused").type("1");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("3");
    cy.get("input.input-focused").type("7");
    cy.get("#registration-confirm-code form > a").click();
    cy.get("a.teams-tab-link").click();
    cy.get("#sidebar-menu-tab li:nth-of-type(4) div.item-inner > div").click();
    cy.get("div.pulsing-button > i").click();
    cy.get("div.text-center div:nth-of-type(1) > div").click();
    cy.get("div.pulsing-button > i").click();
    cy.get("div.pulsing-button > i").click();

    //Automatically capture screenshots & videos on failure - only when execute through CLI





  });
});

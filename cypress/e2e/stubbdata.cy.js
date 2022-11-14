describe("Stubbed API Calls", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json", {
      fixture: "/sampleData.json",
    }).as("sampleData");
  });

  it("Should return the stubbed champion data", () => {
    cy.visit("http://localhost:3000")
      .wait("@sampleData")
      .its("response.body.champions")
      .should("have.length", 4);
  });
});

// https://docs.cypress.io/api/introduction/api.html

describe("Audio Player", () => {
  it("plays audio", () => {
    cy.visit('/')
    cy.get('.song_item:first').click()
    cy.get('#playBtn').click()
    cy.wait(5000)

    cy.get('#playerPlayBtn').click()
  });
});

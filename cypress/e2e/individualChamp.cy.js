describe('Individual Champion Card', () => {
  beforeEach(() => {
    cy.visit('https://league-helper-la3cspb3c-mmartinelli22.vercel.app/')
    const firstImage = cy.get('.single-champion').contains('Aatrox')
      .click();
  })
  it('should display the champions image', () => {
    cy.url().should('be.equal', 'https://league-helper-la3cspb3c-mmartinelli22.vercel.app/Aatrox')
  })
  it('should contain all of the champions information', () => {
    cy.get('.champion-details-img')
    cy.get('.champion-details-name')
    cy.get('.champion-blurb')
    cy.get('.champion-details-tags')
  })
  it('should take the user back to the home page when they click back to home', () => {
    cy.get('.home-button').click()
    cy.url().should('be.equal', 'https://league-helper-la3cspb3c-mmartinelli22.vercel.app/')
    cy.get('.champion-container').get('.feature-champions-key').find('a').should('have.length', 161)
  })
  it('should not show information that exists on  home page', () => {
    cy.get('.champion-name').should('not.exist')
    cy.get('.champion-img').should('not.exist')
    cy.get('.champion-container').should('not.exist')
  })
})
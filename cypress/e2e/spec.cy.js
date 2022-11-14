describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('https://league-helper-la3cspb3c-mmartinelli22.vercel.app')
  })

  it('as a user, I should see all champions render when the page loads', () => {
    cy.get('.champion-container').get('.filter-button').get('h1').contains('League Helper: Help You Search For Your Champion!')
  })
  it('the page should load ALL champions on first load', () => {
    cy.get('.champion-container').get('.feature-champions-key').find('a').should('have.length', 161)
  })
  it('As a user, I should be able to click on a champion tag and all champions with that tag should display', () => {
    cy.get('.filter-button').get('.possible-champions').contains('Fighter').wait(2000).click()
    cy.get('.champion-container').find('a').should('have.length', 69)

  })
  it('Should show all the champions again after you click reset filter', () => {
    cy.get('.filter-button').first().click()
    cy.get('.champion-container').get('.feature-champions-key').find('a')
    cy.get('.filter-button').find('.reset-button').click()
    cy.get('.champion-container').get('.feature-champions-key').find('a').should('have.length', 161)
  })
  it('should render the tagform when the page loads', () => {
    cy.get('.filter-button').get('.possible-champions').should('have.length', 6)
  })
  it('should not contain individual champion information', () => {
    cy.get('h5').should('not.exist')
    cy.get('.champion-blurb').should('not.exist')
    cy.get('.champion-details-name').should('not.exist')
  })
})
describe('E2E test for trip budget tracker app', () => {
  it('Visit site and looks for the h2 header', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.home > h2').should('have.text', 'Welcome to Trip Budget Tracker');
  });
  it('Click on My Trips in the nav bar and takes user to My Trips page', () => {
    cy.get('#nav-bar > li:nth-child(2) > a').click();
    cy.url().should('be','MyTrips;');
  });
  it('The Add a new trip form has a h3 header', () => {
    cy.get('#root > div > section > div > h3').should('have.text', 'Add a new trip')
  });
});
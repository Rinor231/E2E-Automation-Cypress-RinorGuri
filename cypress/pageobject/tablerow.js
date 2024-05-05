const table = {
    tablecount () {
        cy.title().should('include', 'Services');
    cy.get('span').should('be.visible');
    cy.get('td').should('be.visible');
    cy.get('table') 
      .find('tr') 
      .then((rows) => {
        const rowCount = rows.length;
        cy.log(`faqja ka ${rowCount} rreshta`);
      });
    }

}

export default table;
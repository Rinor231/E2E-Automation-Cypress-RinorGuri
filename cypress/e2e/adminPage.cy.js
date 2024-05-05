describe('Admin Page Test', () => {
    it('Should interact with form elements and submit', () => {
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm');
        cy.get('button.button[name="action"][value="CLEAN"]').click();
      cy.get('#accessMode2').click();
      cy.get('#accessMode2').should('be.checked');
      cy.get('#loanProvider')
      .select('jms').should('have.value', 'jms');
      cy.get('.button[value="Submit"]').click();
    });
});

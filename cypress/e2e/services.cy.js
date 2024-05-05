describe('Services Page Test', () => {
    it('Should get the number of table rows', () => {
        cy.visit('https://parabank.parasoft.com/parabank/services.htm');
        cy.get('table > tbody > tr').its('length').as('rowCount');
        cy.get('@rowCount').then(count => {
            cy.log(`Faqja ka ${count} rreshta`);
        });
    });
});

import table from "../pageobject/tablerow";

describe('Table', () => {
    it('passed', () => {
      cy.visit('https://parabank.parasoft.com/parabank/services.htm');
        table.tablecount()
  })
  })
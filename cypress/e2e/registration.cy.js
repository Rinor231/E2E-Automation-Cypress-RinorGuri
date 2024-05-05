import { faker } from '@faker-js/faker';

describe('Registration and Login Test', () => {
  let savedUsername;
  let savedPassword;

  before(() => {
    savedUsername = faker.internet.userName();
    savedPassword = faker.internet.password();
  });

  it('Register', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    const fakeFirstName = faker.name.firstName();
    const fakeLastName = faker.name.lastName();
    const fakeStreet = faker.address.streetAddress();
    const fakeCity = faker.address.city();
    const fakeState = faker.address.state();
    const fakeZipCode = faker.address.zipCode();
    const fakePhoneNumber = faker.phone.number();
    const fakeSSN = faker.datatype.number({ min: 100000000, max: 999999999 }).toString();

    cy.get('#customer\\.firstName').type(fakeFirstName);
    cy.get('#customer\\.lastName').type(fakeLastName);
    cy.get('#customer\\.address\\.street').type(fakeStreet);
    cy.get('#customer\\.address\\.city').type(fakeCity);
    cy.get('#customer\\.address\\.state').type(fakeState);
    cy.get('#customer\\.address\\.zipCode').type(fakeZipCode);
    cy.get('#customer\\.phoneNumber').type(fakePhoneNumber);
    cy.get('#customer\\.ssn').type(fakeSSN);
    cy.get('#customer\\.username').type(savedUsername);
    cy.get('#customer\\.password').type(savedPassword);
    cy.get('#repeatedPassword').type(savedPassword);
    cy.get('input[type="submit"][value="Register"]').click();

    cy.contains('Log Out').click();
    cy.get('input[name="username"]').type(savedUsername);
    cy.get('input[name="password"]').type(savedPassword);
    cy.get('input[type="submit"][value="Log In"]').click();
  });
})
import { faker } from '@faker-js/faker';
import registrationPage from '../pageobject/registration';

describe('Registration and Login Test', () => {
    let savedUsername;
    let savedPassword;

    before(() => {
        savedUsername = faker.internet.userName();
        savedPassword = faker.internet.password();
    });

    it('Register', () => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        registrationPage.fillRegistration(savedUsername, savedPassword);
        cy.get('input[type="submit"][value="Register"]').click();
        cy.contains('Log Out').click();
    });

    it('Login', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('input[name="username"]').type(savedUsername);
        cy.get('input[name="password"]').type(savedPassword);
        cy.get('input[type="submit"][value="Log In"]').click();
    });
});
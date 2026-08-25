import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

test.describe('Login', () => {
    let loginPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTo('/login');
    });

    test('User can login successfully', async () => {
        await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);
    });

    test('User cannot login with invalid email', async () => {
        await loginPage.login('invalid@email.com', process.env.PASSWORD);
       
       await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
});



    test('User cannot login with invalid password', async () => {
      await loginPage.login(process.env.USER_NAME, 'invalidPassword');
      
      await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
    });

    test('User cannot login with empty fields', async () => {
    await loginPage.login('', '');

    await expect(loginPage.emailInput).toBeFocused();
});
});


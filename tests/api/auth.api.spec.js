import { test, expect } from '@playwright/test';
import { AuthenticationAPI } from '../../api/AuthenticationAPI.js';

test.describe('Authentication API', () => {

    test('user can login via API', async ({ request }) => {

        const authenticationAPI = new AuthenticationAPI(request);

        const response = await authenticationAPI.apiLogin(
            process.env.USER_NAME,
            process.env.PASSWORD
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.message).toBe('User exists!');


    });

    test('user cannot login with invalid credentials', async ({ request }) => {

    const authenticationAPI = new AuthenticationAPI(request);

    const response = await authenticationAPI.apiLogin(
        'wrong@email.com',
        'wrongPassword'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!');
});
});
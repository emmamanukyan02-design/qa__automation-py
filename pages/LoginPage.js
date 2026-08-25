import { BasePage } from './BasePage.js';
import { loginLocators } from '../tests/locators/login.locators.js';

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.emailInput = page.locator(loginLocators.emailInput);
        this.passwordInput = page.locator(loginLocators.passwordInput);
        this.loginButton = page.locator(loginLocators.loginButton);
        this.errorMessage = page.locator(loginLocators.errorMessage);
    }

    async login(email, password) {
        await this.navigateTo('/login');

        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}
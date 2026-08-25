import { expect } from '@playwright/test';    
export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigateTo(path) {
        await this.page.goto(`${process.env.BASE_URL}${path}`);
    }

    async waitForElement(locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async click(locator) {
        await locator.click();
    }

    async assertErrorMessage(locator, expectedMessage) {
        await expect(locator).toHaveText(expectedMessage);
    }
}
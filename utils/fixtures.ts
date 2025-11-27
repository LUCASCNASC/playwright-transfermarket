// utils/fixtures.ts
import { test as base, Page, expect } from '@playwright/test';
import users from '../tests/data/users.json';

export const test = base.extend<{
  login: Page;  
}>({
  login: async ({ page }, use) => {

    await page.locator('input[name="email"]').fill(users.validUser.email);
    await page.locator('input[type="password"]').fill(users.validUser.password);
    await page.click('button[type="submit"]');
    // ⬅️ Ajuste: usar somente "page"
    await expect(page.getByText('Projects')).toBeVisible();
    await use(page); // disponibiliza a fixture login
  }
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page/LoginPage';
import users from '../data/users.json'

test('login sucessful', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('/');
  loginPage.clickMinhaConta()
  await page.waitForTimeout(2000)
  loginPage.fillEmail(users.validUser.email)
  // loginPage.fillSenha(users.validUser.password)
  // loginPage.clickProsseguir()

});

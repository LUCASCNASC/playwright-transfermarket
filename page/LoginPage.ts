import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickMinhaConta() {
    await this.page.locator('text=Minha Conta').click();;
  }

  async fillEmail(email:string) {
    await this.page.fill('#email', email);
  }

  async fillSenha(senha:string) {
    await this.page.fill('#id_senha', senha);
  }

  async clickProsseguir() {
    await this.page.getByRole('button', { name: 'Prosseguir' }).click();
  }

}

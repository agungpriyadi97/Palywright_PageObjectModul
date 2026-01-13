const { test, expect } = require('@playwright/test');
const LoginPage = require('../../playwright-pom/tests/pages/LoginPage');

test('Login sukses', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);
});

const { test, expect } = require('@playwright/test');
const LoginPage = require('../../tests/pages/LoginPage');
const PimPage = require('../../tests/pages/PimPage');
const EmployeeFormPage = require('../../tests/pages/EmployeeFormPage');

test('CRUD Employee - Stable Flow', async ({ page }) => {
  const login = new LoginPage(page);
  const pim = new PimPage(page);
  const form = new EmployeeFormPage(page);

  // LOGIN
  await login.goto();
  await login.login('Admin', 'admin123');

  // CREATE
  await pim.open();
  await pim.goToAddEmployee();
  await form.createEmployee('Budi', 'Automation');
  await form.assertSaved();

  // READ
  await pim.goToEmployeeList();
  await pim.searchByName('Budi');
  await expect(page.getByRole('cell', { name: /Budi/i })).toBeVisible();
});

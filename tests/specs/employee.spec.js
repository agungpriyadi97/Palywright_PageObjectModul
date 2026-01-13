const { test, expect } = require('@playwright/test');
const LoginPage = require('../../tests/pages/LoginPage');
const EmployeePage = require('../../tests/pages/EmployeePage');

test('CRUD Employee', async ({ page }) => {
    const login = new LoginPage(page);
    const employee = new EmployeePage(page);

    // LOGIN
    await login.goto();
    await login.login('Admin', 'admin123');

    // CREATE
    await employee.openPIM();
    await employee.addEmployee('Budi', 'Automation');
    await expect(page.getByText('Successfully Saved')).toBeVisible();

    // Kembali ke Employee List
    await page.getByRole('link', { name: 'Employee List' }).click();

    // Cari employee
    await page.getByPlaceholder('Type for hints...').fill('Budi');

    // Validasi hasil
    await expect(page.getByRole('cell', { name: /Budi Automation/i })).toBeVisible();
});
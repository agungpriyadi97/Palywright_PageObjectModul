class EmployeeFormPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.successToast = page.getByText('Successfully Saved');
  }

  async createEmployee(firstName, lastName) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.saveBtn.click();
  }

  async assertSaved() {
    await this.successToast.waitFor({ state: 'visible' });
  }
}

module.exports = EmployeeFormPage;

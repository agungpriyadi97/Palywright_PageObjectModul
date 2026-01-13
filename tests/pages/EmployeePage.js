class EmployeePage {
  constructor(page) {
    this.page = page;
    this.menuPIM = page.getByText('PIM');
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
    this.searchName = page.getByPlaceholder('Type for hints...');
    this.deleteBtn = page.getByRole('button', { name: 'Delete' });
    this.confirmDelete = page.getByRole('button', { name: 'Yes, Delete' });
  }

  async openPIM() {
    await this.menuPIM.click();
  }

  async addEmployee(first, last) {
    await this.addBtn.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.saveBtn.click();
  }
}

module.exports = EmployeePage;
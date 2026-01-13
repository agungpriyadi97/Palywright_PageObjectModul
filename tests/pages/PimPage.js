class PimPage {
  constructor(page) {
    this.page = page;
    this.menuPIM = page.getByText('PIM');
    this.addBtn = page.getByRole('button', { name: 'Add' });
    this.employeeListLink = page.getByRole('link', { name: 'Employee List' });
    this.searchInput = page.getByPlaceholder('Type for hints...').first();
  }

  async open() {
    await this.menuPIM.click();
  }

  async goToAddEmployee() {
    await this.addBtn.click();
  }

  async goToEmployeeList() {
    await this.employeeListLink.click();
  }

  async searchByName(name) {
    await this.searchInput.fill(name);
  }
}

module.exports = PimPage;

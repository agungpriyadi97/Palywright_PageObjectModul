class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.locator('.oxd-alert-content-text');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;

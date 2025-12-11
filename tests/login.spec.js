const { test, expect } = require('@playwright/test');

test('Login - success with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Login - fail with wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'wrong_pass');
  await page.click('#login-button');
  await expect(page.locator('.error-message-container')).toContainText('Epic sadface');
});

test('Login - locked out user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.error-message-container')).toContainText('locked out');
});
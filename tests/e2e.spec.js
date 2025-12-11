const { test, expect } = require('@playwright/test');

test('E2E - login, add, checkout, logout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');

  await page.click('#checkout');
  await page.fill('#first-name', 'E2E');
  await page.fill('#last-name', 'Tester');
  await page.fill('#postal-code', '10000');
  await page.click('#continue');

  await expect(page.locator('.summary_total_label')).toBeVisible();
  await page.click('#finish');

  // logout
  await page.click('#react-burger-menu-btn');
  await page.waitForSelector('#logout_sidebar_link');
  await page.click('#logout_sidebar_link');

  await expect(page.locator('#login-button')).toBeVisible();
});
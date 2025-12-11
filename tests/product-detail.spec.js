const { test, expect } = require('@playwright/test');

test('Product Detail - navigate and content match', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const firstName = await page.locator('.inventory_item_name').first().textContent();
  await page.locator('.inventory_item_name').first().click();
  await expect(page.locator('.inventory_details_name')).toHaveText(firstName.trim());
});
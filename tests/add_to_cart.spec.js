const { test, expect } = require('@playwright/test');

test('Add to Cart - single item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await page.click('.shopping_cart_link');
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});
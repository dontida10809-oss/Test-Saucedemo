const { test, expect } = require('@playwright/test');

test('Inventory - list, names and prices visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const items = page.locator('.inventory_item');
  await expect(items).toHaveCountGreaterThan(0);
  // check first item has name and price
  await expect(items.nth(0).locator('.inventory_item_name')).toBeVisible();
  await expect(items.nth(0).locator('.inventory_item_price')).toBeVisible();
});

test('Inventory - sort options work (basic smoke)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // sort A to Z
  await page.selectOption('.product_sort_container', 'az');
  await expect(page.locator('.inventory_item_name').first()).toBeVisible();
});
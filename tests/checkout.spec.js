const { test, expect } = require('@playwright/test');

test('Checkout - complete flow', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // add item
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');

  // checkout step one
  await page.click('#checkout');
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '10210');
  await page.click('#continue');

  // step two
  await expect(page.locator('.summary_total_label')).toBeVisible();
  await page.click('#finish');

  // finish
  await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
});
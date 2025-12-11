/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  testDir: './tests',
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
};
module.exports = config;